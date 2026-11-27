from django.shortcuts import render

# Create your views here.

import base64
import json
import logging
from datetime import datetime
from zoneinfo import ZoneInfo

import requests
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

logger = logging.getLogger(__name__)


def get_mpesa_base_url():
    if settings.MPESA_ENVIRONMENT == "sandbox":
        return "https://sandbox.safaricom.co.ke"
    return "https://api.safaricom.co.ke"


@csrf_exempt
@require_POST
def mpesa_payment(request):
    try:
        body = json.loads(request.body or b"{}")
        phone = str(body.get("phone", "")).strip()
        amount = int(body.get("amount", 0))

        if not phone.isdigit() or len(phone) != 12 or not phone.startswith("254"):
            return JsonResponse({
                "error": "Enter a valid number, e.g. 254712345678"
            }, status=400)

        if amount < 1:
            return JsonResponse({
                "error": "Amount must be at least KSh 1"
            }, status=400)

        required = [
            settings.MPESA_CONSUMER_KEY,
            settings.MPESA_CONSUMER_SECRET,
            settings.MPESA_SHORTCODE,
            settings.MPESA_PASSKEY,
            settings.MPESA_CALLBACK_URL,
        ]

        if not all(required):
            return JsonResponse({
                "error": "M-Pesa settings are missing. Check your .env file."
            }, status=500)

        base_url = get_mpesa_base_url()

        token_response = requests.get(
            f"{base_url}/oauth/v1/generate",
            params={"grant_type": "client_credentials"},
            auth=(
                settings.MPESA_CONSUMER_KEY,
                settings.MPESA_CONSUMER_SECRET,
            ),
            timeout=20,
        )

        if not token_response.ok:
            logger.error(
                "M-Pesa token error: status=%s body=%s",
                token_response.status_code,
                token_response.text,
            )
            error_payload = {
                "error": "Could not get Safaricom access token. Check your credentials."
            }
            # Surface the real upstream reason while developing (DEBUG=True).
            if settings.DEBUG:
                error_payload["upstream_status"] = token_response.status_code
                error_payload["upstream_body"] = token_response.text
            return JsonResponse(error_payload, status=502)

        token = token_response.json().get("access_token")
        if not token:
            return JsonResponse({
                "error": "Safaricom did not return an access token."
            }, status=502)

        shortcode = str(settings.MPESA_SHORTCODE)
        timestamp = datetime.now(
            ZoneInfo("Africa/Nairobi")
        ).strftime("%Y%m%d%H%M%S")

        password = base64.b64encode(
            f"{shortcode}{settings.MPESA_PASSKEY}{timestamp}".encode()
        ).decode()

        payload = {
            "BusinessShortCode": shortcode,
            "Password": password,
            "Timestamp": timestamp,
            "TransactionType": "CustomerPayBillOnline",
            "Amount": amount,
            "PartyA": phone,
            "PartyB": shortcode,
            "PhoneNumber": phone,
            "CallBackURL": settings.MPESA_CALLBACK_URL,
            "AccountReference": "HappyCart",
            "TransactionDesc": "Payment",
        }

        response = requests.post(
            f"{base_url}/mpesa/stkpush/v1/processrequest",
            json=payload,
            headers={
                "Authorization": f"Bearer {token}",
                "Content-Type": "application/json",
            },
            timeout=30,
        )

        try:
            result = response.json()
        except ValueError:
            logger.error("Invalid Safaricom response: %s", response.text)
            return JsonResponse({
                "error": "Safaricom returned an invalid response."
            }, status=502)

        if not response.ok:
            logger.error("STK Push error: %s", result)
            return JsonResponse({
                "error": result.get(
                    "errorMessage", "Safaricom rejected the payment request."
                )
            }, status=502)

        return JsonResponse(result, status=200)

    except (ValueError, TypeError, json.JSONDecodeError):
        return JsonResponse({
            "error": "Enter a valid phone number and whole-number amount."
        }, status=400)

    except requests.Timeout:
        return JsonResponse({
            "error": "Safaricom request timed out. Try again."
        }, status=504)

    except requests.RequestException:
        logger.exception("Could not connect to Safaricom")
        return JsonResponse({
            "error": "Could not connect to Safaricom."
        }, status=502)

    except Exception:
        logger.exception("Unexpected M-Pesa error")
        return JsonResponse({
            "error": "Unexpected server error. Check the Django terminal."
        }, status=500)


@csrf_exempt
@require_POST
def mpesa_callback(request):
    try:
        callback_data = json.loads(request.body or b"{}")
        logger.info("M-Pesa callback received: %s", callback_data)

        # Acknowledge receipt. Add payment verification and
        # database updates before treating an order as paid.
        return JsonResponse({"ResultCode": 0, "ResultDesc": "Accepted"})

    except (ValueError, json.JSONDecodeError):
        return JsonResponse({
            "ResultCode": 1,
            "ResultDesc": "Invalid callback data",
        }, status=400)
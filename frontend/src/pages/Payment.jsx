
import { useState } from "react";

function Payment() {
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/mpesa/pay/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        phone: phone,
                        amount: Number(amount),
                    }),
                }
            );

            const data = await response.json();

            console.log("Django response:", data);

            if (!response.ok) {
                alert(data.error || data.detail || "Payment request failed.");
                return;
            }

            if (data.ResponseCode === "0") {
                alert("STK Push request accepted. Check your phone.");
            } else {
                alert(
                    data.error ||
                    data.ResponseDescription ||
                    "Payment request failed."
                );
            }
        } catch (error) {
            console.error("Payment error:", error);
            alert("Could not connect to Django. Check the Console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">
                                M-Pesa Payment
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="phone"
                                        className="form-label"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        type="tel"
                                        id="phone"
                                        className="form-control"
                                        placeholder="254712345678"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        htmlFor="amount"
                                        className="form-label"
                                    >
                                        Amount (KSh)
                                    </label>

                                    <input
                                        type="number"
                                        id="amount"
                                        className="form-control"
                                        placeholder="Enter amount"
                                        min="1"
                                        step="1"
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success w-100"
                                    disabled={loading}
                                >
                                    {loading
                                        ? "Processing..."
                                        : "Pay Via M-Pesa"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
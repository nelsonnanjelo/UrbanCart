from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product
import json




@csrf_exempt
def upload_product(request):

    if request.method == 'POST':
        data = json.loads(request.body)

        Product.objects.create(
            name=data.get('name'),
            quantity=data.get('quantity'),
            price=data.get('price'),
            description=data.get('description')
        )

        return JsonResponse({'message': 'Product uploaded successfully!'})

    return JsonResponse({'message': 'Invalid request'}, status=400)



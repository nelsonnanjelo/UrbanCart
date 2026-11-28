from django.contrib import admin
from django.urls import path
from products.views import ( create_product, get_products,get_product,update_product,delete_product)



urlpatterns = [
    path('create/', create_product),
    path('all/', get_products),
    path('<int:pk>/', get_product),
    path('update/<int:pk>/', update_product),
    path('delete/<int:pk>/', delete_product),
]
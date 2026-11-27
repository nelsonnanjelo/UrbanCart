
from django.contrib import admin
from django.urls import path
from payments import views

urlpatterns = [
    path('admin/', admin.site.urls),



    #Mpesa URLs
    path("pay/", views.mpesa_payment, name="mpesa_payment"),
    path("callback/", views.mpesa_callback, name="mpesa_callback"),
    
]
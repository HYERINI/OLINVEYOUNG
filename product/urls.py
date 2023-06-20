from django.urls import path
from .views import *

app_name = "product"

urlpatterns = [
    path('list/', product_list, name='product_list'),
    path('<int:id>/', product_detail, name='product_detail'),
    path('cart/list/', cart_list, name='cart_list'),
    path('cart/create/', cart_create, name='cart_create'),
    path('cart/update/', cart_update, name='cart_update'),
    path('cart/delete/', cart_delete, name='cart_delete'),
    path('order/list/', order_list, name='order_list'),

]

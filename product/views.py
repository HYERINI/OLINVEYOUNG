from django.shortcuts import render, redirect
import json
from django.http import JsonResponse

from .models import Product, Cart

def product_list(request):
    context = {
        "product_list" : Product.objects.all()
    }

    return render(request,"index.html",context)

def product_detail(request,id):
    product = Product.objects.get(id = id)
    context = {
        "product" : product
    }
    return render(request,"cosDetail.html",context)

def cart_list(request):
    cart_list = Cart.objects.filter(user = request.user,ordered = False).order_by("-created_at")
    context = {
        "cart_list" : cart_list,
    }
    return render(request,"cart.html",context)

def cart_create(request):
    data = json.loads(request.body)
    cart = Cart.objects.create(
        user = request.user,
        product = Product.objects.get(id = data['id']),
        quantity = data['quantity'],
    )
    return JsonResponse({},status = 200)

def cart_update(request):
    carts = Cart.objects.filter(user = request.user, ordered = False)
    for cart in carts:
        cart.ordered=True
        cart.save()
    return redirect("product:order_list")

def cart_delete(request):
    data = json.loads(request.body)
    cart = Cart.objects.get(id = data['id'])
    cart.delete()

    return JsonResponse({},status = 200)

def order_list(request):
    orders = Cart.objects.filter(user = request.user,ordered = True).order_by("-created_at")
    context = {
        "order_list" : orders,
    }
    return render(request,"order.html",context)

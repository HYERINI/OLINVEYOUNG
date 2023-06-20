from django.shortcuts import render, redirect

def redirection(request):
    if request.user.is_authenticated:
        return redirect("product:product_list")
    else:
        return redirect("account:login")

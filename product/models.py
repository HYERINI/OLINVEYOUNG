from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length = 100,null= False)
    price = models.IntegerField(null = False)
    image = models.ImageField(upload_to = "product")
    created_at = models.DateTimeField(auto_now_add = True)

class Cart(models.Model):
    user = models.ForeignKey("account.user",on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.IntegerField(null = False)
    created_at = models.DateTimeField(auto_now_add = True)
    ordered = models.BooleanField(default = False)

from django.db import models
from apps.user.models import User
from apps.product.models import Product


# Create your models here.
class Cart(models.Model):
    user = models.ForeignKey(User, related_name="user_cart", on_delete=models.CASCADE)
    product = models.ForeignKey(
        Product, related_name="users_product", on_delete=models.CASCADE
    )
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return self.user.name + " " + self.product.name

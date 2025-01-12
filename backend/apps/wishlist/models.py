from django.db import models

from apps.core.models import Timestamps
from apps.product.models import Product
from apps.user.models import User


class WishList(Timestamps):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="wishlist")
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="wishlists"
    )

    unique_together = ("user", "product")

    def __str__(self):
        return f"{self.user} -likes- {self.product}"

from django.contrib import admin

from apps.cart.models import Cart


# Register your models here.
@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ["user", "product"]
    list_filter = ["product", "user"]

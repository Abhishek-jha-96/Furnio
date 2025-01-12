from django.contrib import admin

from apps.wishlist.models import WishList


@admin.register(WishList)
class WishListAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'created_at', 'updated_at')
    search_fields = ('user__name', 'product__name')

from django.apps import AppConfig

from apps.wishlist.settings import WISHLIST_APP


class WishlistConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = WISHLIST_APP

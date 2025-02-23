from django.apps import AppConfig

from apps.cart.settings import CART_APP


class CartConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = CART_APP

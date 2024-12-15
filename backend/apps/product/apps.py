from django.apps import AppConfig

from apps.product.settings import PRODUCT_APP


class ProductConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = PRODUCT_APP

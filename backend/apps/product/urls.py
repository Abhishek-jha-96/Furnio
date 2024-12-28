from django.urls import path
from rest_framework import routers

from apps.product.settings import PRODUCT_APP
from apps.product.views import ProductViewset


app_name = PRODUCT_APP

router = routers.DefaultRouter()
router.register("product", ProductViewset, basename="product")

urlpatterns = router.urls
from django.urls import path
from rest_framework import routers

from apps.product.settings import PRODUCT_APP
from apps.product.views import ProductListViewset, ProductViewset


app_name = PRODUCT_APP

router = routers.DefaultRouter()
router.register("product", ProductViewset, basename="product")
router.register("list_product", ProductListViewset, basename="list-product")
urlpatterns = router.urls

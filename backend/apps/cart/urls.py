from apps.cart.settings import CART_APP, CART_BASENAME, CART_URL_PREFIX
from apps.cart.views import CartViewset
from rest_framework import routers


app_name = CART_APP

router = routers.SimpleRouter()

router.register(CART_URL_PREFIX, CartViewset, basename=CART_BASENAME)

urlpatterns = router.urls

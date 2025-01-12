from django.urls import path

from rest_framework.routers import DefaultRouter
from apps.wishlist.settings import WISHLIST_APP, WISHLIST_URL_BASENAME, WISHLIST_URL_PREFIX
from apps.wishlist.views import WishlistViewset


app_name = WISHLIST_APP

router = DefaultRouter()

router.register(WISHLIST_URL_PREFIX, WishlistViewset, basename=WISHLIST_URL_BASENAME)

urlpatterns = router.urls
from rest_framework import viewsets

from apps.wishlist.models import WishList
from apps.core.permissions import CustomBasePermission
from apps.wishlist.serializers import WishlistSerializer

class WishlistViewset(viewsets.ModelViewSet):
    queryset = WishList.objects.all()
    serializer_class = WishlistSerializer
    permission_classes = CustomBasePermission

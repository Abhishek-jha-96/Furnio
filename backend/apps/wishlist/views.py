from apps.wishlist.models import WishList
from apps.core.permissions import CustomBasePermission
from apps.wishlist.serializers import WishlistSerializer
from apps.core.views import BaseViewset
from apps.core.pagination import ListPagination


class WishlistViewset(BaseViewset):
    queryset = WishList.objects.all()
    serializer_class = WishlistSerializer
    permission_classes = [
        CustomBasePermission,
    ]
    pagination_class = ListPagination

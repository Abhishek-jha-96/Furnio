from apps.core.views import BaseViewset
from apps.cart.models import Cart
from apps.cart.serializers import CartSerializer
from apps.core.permissions import CustomBasePermission


class CartViewset(BaseViewset):
    permission_classes = (CustomBasePermission,)
    serializer_class = CartSerializer
    queryset = Cart.objects.all()
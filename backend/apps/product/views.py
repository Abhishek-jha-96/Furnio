from apps.core.views import BaseListModelMixin, BaseViewset
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.viewsets import GenericViewSet
from apps.product.models import Product
from apps.product.serializers import ProductSerializer
from apps.core.pagination import ListPagination


class ProductViewset(BaseViewset):
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset = Product.objects.all()


class ProductListViewset(GenericViewSet, BaseListModelMixin):
    serializer_class = ProductSerializer
    pagination_class = ListPagination
    queryset = Product.objects.all()

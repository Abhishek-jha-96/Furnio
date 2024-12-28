from apps.core.views import BaseViewset
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from apps.product.models import Product

class ProductViewset(BaseViewset):
    serializer_class = None
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    queryset = Product.objects.all()

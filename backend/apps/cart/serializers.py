from apps.cart.models import Cart
from apps.product.serializers import ProductSerializer
from apps.user.serializers import UserSerializer
from rest_framework.serializers import ModelSerializer


class CartSerializer(ModelSerializer):
    product_details = ProductSerializer(read_only=True, source="product")
    user_details = UserSerializer(read_only=True, source="user")

    class Meta:
        model = Cart
        fields = ["id", "product", "product_details", "user_details", "user", "quantity",]

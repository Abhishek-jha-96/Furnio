from apps.cart.models import Cart
from apps.product.serializers import ProductSerializer
from apps.user.serializers import UserSerializer
from rest_framework.serializers import ModelSerializer


class CartSerializer(ModelSerializer):
    product_details = ProductSerializer(read_only=True)
    user_details = UserSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = "__all__"

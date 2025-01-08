from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from apps.user.serializers import (
    TokenObtainPairSerializer,
    UserSerializer,
)
from apps.core.views import BaseViewset
from apps.user.models import (
    User,
)
from apps.user.permissions import UserPermission
from apps.core.db_layer import db_get_records_by_filters


class TokenObtainPairView(TokenObtainPairView):
    """
    Takes a set of user credentials and returns an access and refresh JSON web
    token pair to prove the authentication of those credentials.
    """

    serializer_class = TokenObtainPairSerializer


class UserViewsets(BaseViewset):
    """
    Viewset for User crud operations
    """

    serializer_class = UserSerializer
    authentication_classes = (JWTAuthentication,)
    permission_classes = (UserPermission,)

    def get_queryset(self):
        return db_get_records_by_filters(User, filters={"id": self.request.user.id})

from django.urls import path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenRefreshView
from apps.user.views import TokenObtainPairView, UserViewsets
from apps.user.constants import USER_APP, USER_BASENAME, USER_URL_PREFIX

app_name = USER_APP

router = routers.SimpleRouter()

router.register(USER_URL_PREFIX, UserViewsets, basename=USER_BASENAME)

urlpatterns = [
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token-refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

urlpatterns += router.urls

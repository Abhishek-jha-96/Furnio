from rest_framework import permissions
from apps.user.constants import BASE_PERMISSION_ERROR_MESSAGE


class CustomBasePermission(permissions.BasePermission):
    """
    Object-level permission to allow only if user role has permission to access the API
    """

    message = BASE_PERMISSION_ERROR_MESSAGE

    def has_permission(self, request, view):
        if not (
            request.user
            and request.user.is_authenticated
            and request.user.is_active
            and request.user.email_verified
        ):
            return False
        return True

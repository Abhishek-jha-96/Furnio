from apps.core.permissions import CustomBasePermission


class UserPermission(CustomBasePermission):
    def has_permission(self, request, view):
        if view.action == "create":
            return True
        return super().has_permission(request, view)

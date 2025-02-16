from apps.core.permissions import CustomBasePermission


class BlogPermission(CustomBasePermission):
    def has_permission(self, request, view):
        if request.method == "GET":
            return True
        return super().has_permission(request, view)

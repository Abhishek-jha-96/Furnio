from apps.core.views import BaseViewset
from apps.blog.models import Blog
from apps.blog.serializers import BlogSerializer
from apps.blog.permission import BlogPermission


class BlogViewset(BaseViewset):
    permission_classes = BlogPermission
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()

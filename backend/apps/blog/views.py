from apps.core.views import BaseViewset
from apps.blog.models import Blog


class BlogViewset(BaseViewset):
    permission_classes = [None]
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()

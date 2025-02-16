from rest_framework import routers

from apps.blog.settings import BLOG_APP_NAME, BLOG_BASENAME, BLOG_URL_PREFIX
from apps.blog.views import BlogViewset

app_name = BLOG_APP_NAME

router = routers.SimpleRouter()

router.register(BLOG_URL_PREFIX, BlogViewset, basename=BLOG_BASENAME)

urlpatterns = router.urls

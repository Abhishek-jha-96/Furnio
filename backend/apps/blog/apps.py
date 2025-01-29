from django.apps import AppConfig
from apps.blog.settings import BLOG_APP_NAME


class BlogConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = BLOG_APP_NAME

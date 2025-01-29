from django.db import models

from apps.core.models import Timestamps
from apps.user.models import User
from apps.blog.settings import BLOG_TITLE_MAX_LENGTH


class Blog(Timestamps):
    title = models.CharField(max_length=BLOG_TITLE_MAX_LENGTH)
    content = models.TextField()
    image = models.URLField(
        null=True, blank=True
    )  # will migrate when add file app to upload files to cloud.
    author = models.ForeignKey(User, related_name="author", on_delete=models.CASCADE)

    def __str__(self):
        return self.title

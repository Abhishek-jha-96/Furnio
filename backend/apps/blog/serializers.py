from rest_framework.serializers import ModelSerializer
from rest_framework.fields import URLField
from apps.blog.models import Blog


class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = (
            "id",
            "title",
            "content",
            "image",
            "author",
            "created_ts",
            "modified_ts",
        )
        read_only_fields = ("id", "created_ts", "modified_ts", "author")

    image = URLField(required=False, allow_blank=True)

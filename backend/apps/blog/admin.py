from django.contrib import admin
from apps.blog.models import Blog


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "created_ts", "modified_ts")
    list_filter = ("author",)
    search_fields = ("title", "author__name")

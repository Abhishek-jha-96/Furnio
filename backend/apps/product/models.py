from django.db import models
from apps.core.models import Timestamps


class Product(Timestamps):
    class ProductCategory(models.TextChoices):
        LIVING_ROOM_FURNITURE = "LIVING_ROOM_FURNITURE", "Living Room Furniture"
        BEDROOM_FURNITURE = "BEDROOM_FURNITURE", "Bedroom Furniture"
        DINING_ROOM_FURNITURE = "DINING_ROOM_FURNITURE", "Dining Room Furniture"
        KITCHEN_FURNITURE = "KITCHEN_FURNITURE", "Kitchen Furniture"
        OFFICE_FURNITURE = "OFFICE_FURNITURE", "Office Furniture"
        OUTDOOR_FURNITURE = "OUTDOOR_FURNITURE", "Outdoor Furniture"
        CHILDRENS_FURNITURE = "CHILDRENS_FURNITURE", "Children's Furniture"
        STORAGE_FURNITURE = "STORAGE_FURNITURE", "Storage Furniture"
        BATHROOM_FURNITURE = "BATHROOM_FURNITURE", "Bathroom Furniture"
        ACCENT_FURNITURE = "ACCENT_FURNITURE", "Accent Furniture"

    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(choices=ProductCategory)

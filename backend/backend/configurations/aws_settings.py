from boto3 import resource, client
from botocore.config import Config

from .env_helpers import get_env_var

AWS_ACCESS_KEY_ID = get_env_var("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = get_env_var("AWS_SECRET_ACCESS_KEY")
AWS_STORAGE_BUCKET_NAME = get_env_var("AWS_STORAGE_BUCKET_NAME")
AWS_S3_OBJECT_PARAMETERS = {"CacheControl": "max-age=86400"}
AWS_S3_PRE_SIGNED_POST_TIMEOUT = 3600
AWS_S3_SIGNATURE_VERSION = "s3v4"
AWS_REGION_NAME = get_env_var("AWS_REGION_NAME")
AWS_LOCATION = "static"
AWS_S3_USE_SSL = True
AWS_DEFAULT_ACL = None
AWS_S3_CUSTOM_DOMAIN = f"{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com"
AWS_S3_FILE_KEY_PREFIX: str = "media/project_files/"

STATIC_URL = "/static/"
STORAGES = {
    "default": {
        "BACKEND": "storages.backends.s3.S3Storage",
    },
    "staticfiles": {"BACKEND": "storages.backends.s3.S3Storage"},
}

s3_resource = resource(
    "s3",
    config=Config(signature_version=AWS_S3_SIGNATURE_VERSION),
    aws_access_key_id=AWS_ACCESS_KEY_ID,
    aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
    region_name=AWS_REGION_NAME,
)
s3_client = s3_resource.meta.client

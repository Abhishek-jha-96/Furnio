#!/bin/bash

set -e

export DJANGO_SETTINGS_MODULE=backend.settings

if [ "$ENVIRONMENT" = "local" ]; then
    echo "Running local development server."
    exec python manage.py runserver "$BASE_URL"
else
    echo "Running gunicorn server."
    exec gunicorn backend.wsgi:application \
        --name backend \
        --bind "$BASE_URL" \
        --reload \
        --workers 2 \
        --log-level=debug \
        "$@"
fi
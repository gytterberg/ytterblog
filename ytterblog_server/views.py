from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

from server.models import Post
from server.serializers import PostSerializer
from rest_framework.decorators import api_view

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))

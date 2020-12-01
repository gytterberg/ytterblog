# todo/serializers.py

from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ('title', 'body', 'posted', 'user', 'id', 'protected')
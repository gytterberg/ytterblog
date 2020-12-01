from rest_framework import viewsets, status

from .serializers import PostSerializer      
from .models import Post

from rest_framework.response import Response

from server.models import Post

class PostView(viewsets.ModelViewSet):  
  serializer_class = PostSerializer          
  queryset = Post.objects.all()  

  def list(self, request):
    queryset = Post.objects.all()  

    serializer = PostSerializer(queryset, many=True)
    return Response(serializer.data)

  def update(self, request, pk=None):
    queryset = Post.objects.all().filter(pk=pk)
    post = queryset[0]

    if post.protected == False:
      post.title = request.data['title']
      post.body = request.data['body']
      post.save()
      return Response("Post updated", status=status.HTTP_200_OK)
    else:
      return Response("Post protected", status=status.HTTP_403_FORBIDDEN)

  def destroy(self, request, pk=None):
    queryset = Post.objects.all().filter(pk=pk)
    post = queryset[0]

    if post.protected == False:
      post.delete()
      return Response("Post deleted", status=status.HTTP_200_OK)
    else:
      return Response("Post protected", status=status.HTTP_403_FORBIDDEN)
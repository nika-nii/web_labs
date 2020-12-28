from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets

from api.serializers import BlogUserSerializer, CommentSerializer, PostSerializer, ContentSerializer
from logic.models import Post, BlogUser, Comment, PostPiece


class ContentViewSet(viewsets.ModelViewSet):
    serializer_class = ContentSerializer
    queryset = PostPiece.objects.order_by('order')
    filterset_fields = ['parent']


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('creation_time')
    serializer_class = PostSerializer
    filterset_fields = ['user']


class BlogUserViewSet(viewsets.ModelViewSet):
    queryset = BlogUser.objects.all()
    serializer_class = BlogUserSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    filterset_fields = ['post', 'user']

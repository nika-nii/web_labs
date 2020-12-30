import json

from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from api.serializers import BlogUserSerializer, CommentSerializer, PostSerializer, ContentSerializer
from logic.models import Post, BlogUser, Comment, PostPiece


class MyPostsROViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Post.objects.filter(user=self.request.user)


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


def get_user_id(request):
    print("Request user", request.user)
    if request.user:
        response_data = {
            'user_id': request.user.pk,
        }
        return HttpResponse(json.dumps(response_data), content_type="application/json")
    else:
        return HttpResponse('Authorize first', status=401)

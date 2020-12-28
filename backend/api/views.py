from django.shortcuts import render
from django.http import HttpResponse
import json

from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.response import Response

from api.serializers import BlogUserSerializer, CommentSerializer, PostBriefSerializer, \
    PostContentSerializer
from logic.models import Post, BlogUser, Comment


class PostBriefViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostBriefSerializer


class PostContentViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostContentSerializer


class BlogUserViewSet(viewsets.ModelViewSet):
    queryset = BlogUser.objects.all()
    serializer_class = BlogUserSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


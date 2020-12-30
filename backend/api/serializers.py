from rest_framework import serializers

from logic.models import Post, BlogUser, Comment, PostPiece


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostPiece
        exclude = ['order', 'parent']


class BlogUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

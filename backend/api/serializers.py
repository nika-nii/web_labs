from rest_framework import serializers

from logic.models import Post, BlogUser, Comment


class PostBriefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class PostContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
        depth = 1


class BlogUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogUser
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Blog(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)


class Post(models.Model):
    blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
    content = models.CharField(max_length=1000)


class Comment(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    parent = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.CharField(max_length=1000)

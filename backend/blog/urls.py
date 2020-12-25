from django.contrib import admin
from django.urls import path
from rest_framework import routers

from api.views import PostViewSet

router = routers.SimpleRouter()
router.register(r'posts', PostViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
]

urlpatterns += router.urls

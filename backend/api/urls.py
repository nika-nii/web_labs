from django.conf.urls import url
from rest_framework import routers, permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import BlogUserViewSet, CommentViewSet, PostViewSet, ContentViewSet

schema_view = get_schema_view(
   openapi.Info(
      title="Blog API",
      default_version='v1',
      description="Blog REST API description",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)

router = routers.SimpleRouter()
router.register(r'contents', ContentViewSet, basename='contents')
router.register(r'posts', PostViewSet, basename='posts')
router.register(r'users', BlogUserViewSet, basename='users')
router.register(r'comments', CommentViewSet, basename='comments')

urlpatterns = [
   path('token/', 
         TokenObtainPairView.as_view(), 
         name='token_obtain_pair'),
   path('token/refresh/', 
         TokenRefreshView.as_view(), 
         name='token_refresh'),
   url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += router.urls

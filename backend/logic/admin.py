from django.contrib import admin

from logic.models import *

admin.site.register(Post)
admin.site.register(BlogUser)
admin.site.register(Comment)
admin.site.register(PostPiece)
admin.site.register(ImagePostPiece)
admin.site.register(TextPostPiece)
admin.site.register(CodePostPiece)

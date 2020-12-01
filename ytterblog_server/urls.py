from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

from django.urls import path, include, re_path                 
from rest_framework import routers
from server import views
from .views import index                        

router = routers.DefaultRouter()                      
router.register(r'posts', views.PostView, 'post')     

urlpatterns = [
    path('', index, name='index'),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    re_path(r'^(?:.*)/?$', index, name='index'),           
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
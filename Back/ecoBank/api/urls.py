from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClientView, AnddressView

router = DefaultRouter()
router.register('query/clients', ClientView, basename='clients')
router.register('anddress', AnddressView, basename='anddress')



urlpatterns = [
    path('anddress/', include(router.urls)),
    path('query/clients', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClientView, AnddressView, ClientViewSet, PhoneView, EmailView, NaturalPersonView, LegalPersonView

router = DefaultRouter()
router.register('view/clients', ClientViewSet, basename='view')
router.register('clients', ClientView, basename='clients')
router.register('phone', PhoneView, basename='phone')
router.register('email', EmailView, basename='email')
router.register('natural/person', NaturalPersonView, basename='natural')
router.register('legal/person', LegalPersonView, basename='legal')
router.register('address', AnddressView, basename='address')



urlpatterns = [
    path('query/', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
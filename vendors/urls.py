from django.urls import path, include
# from .views import article_list, article_detail, ArticleApiView, ArticleDetails
# from .views import ArticleApiView, ArticleDetails, GenericeAPIView
from .views import GenericeAPIView
from .views import VendorViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('vendors', VendorViewSet, basename="vendors")

urlpatterns = [
    path('viewset/', include(router.urls)),
    path('viewset/<int:pk>/', include(router.urls)),
    path('generic/vendors/', GenericeAPIView.as_view()),
   
]

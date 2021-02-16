from django.urls import path, include
# from .views import article_list, article_detail, ArticleApiView, ArticleDetails
# from .views import ArticleApiView, ArticleDetails, GenericeAPIView
# from .views import GenericeAPIView
from .views import VendorViewSet, VendorRegisterViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('vendors', VendorViewSet, basename="vendors")
router.register('vendor', VendorRegisterViewSet, basename="vendor-register")

urlpatterns = [
    path('', include(router.urls)),
    path('<int:pk>/', include(router.urls)),
    # path('generic/vendors/', GenericeAPIView.as_view()),
   
]

from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser

from .models import Vendor
from .serializers import VendorSerializer,VendorRegisterSerializer

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import mixins
from rest_framework.authentication import SessionAuthentication, TokenAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated

from rest_framework import viewsets
from django.shortcuts import get_object_or_404

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from django_filters import FilterSet
from django_filters import rest_framework as filters

from rest_framework.decorators import action

class VendorViewSet(viewsets.ModelViewSet):
    serializer_class = VendorSerializer
    queryset = Vendor.objects.all()

class VendorRegisterViewSet(viewsets.ModelViewSet):
    serializer_class = VendorRegisterSerializer
    queryset = Vendor.objects.filter()
    # lookup_field = 'id'    
    # def retrieve(self, request, *args, **kwargs):
    #     id = kwargs.get('id', None)                
    #     # vendor = Vendor.objects.get(id=6)
    #     vendor_list = Vendor.objects.filter(is_active=False, email="test@test1.com").distinct()
    #     vendor_json = VendorSerializer(vendor_list, many=True)
    #     return Response(vendor_json.data)

    @action(detail=True, methods=['post'])
    def register(self, request, pk=None):        
        print(request.data)
        # vendor = Vendor.objects.get(id=6)
        # vendor_list = Vendor.objects.filter(is_active=False, email="test@test1.com").distinct()
        # vendor_json = VendorSerializer(vendor_list, many=True)
        return Response("vendor_json.data")
# class GenericeAPIView(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.RetrieveModelMixin,
#                       mixins.DestroyModelMixin):
#     serializer_class = VendorSerializer
#     queryset = Vendor.objects.all()
#     lookup_field = 'id'
  
#     def post(self, request):
#         return self.create(request)

#     def put(self, request, id=None):
#         return self.update(request, id)

#     def delete(self, request, id):
#         return self.destroy(request, id)




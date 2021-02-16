from rest_framework import serializers
from .models import Vendor


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'        
class VendorRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor        
        fields = ('id', 'email', 'password')

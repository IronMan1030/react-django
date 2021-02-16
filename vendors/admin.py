from django.contrib import admin
from django.contrib import messages
from .models import Vendor

# Register your models here.

class VendorAdmin(admin.ModelAdmin): 
    list_display = ('first_name', 'last_name', 'email','active','created_at','updated_at') 
  
    def active(self, obj): 
        print("obj")
        return obj.is_active == 1
  
    active.boolean = True
  
    def make_approve(modeladmin, request, queryset): 
        print("make_approve")
        queryset.update(is_active = 1) 
        messages.success(request, "Selected Record(s) Marked as Active Successfully !!") 
  
    def make_inactive(modeladmin, request, queryset): 
        queryset.update(is_active = 0) 
        messages.success(request, "Selected Record(s) Marked as Inactive Successfully !!") 
  
    admin.site.add_action(make_inactive, "InActive") 
    admin.site.add_action(make_approve, "Aprrove") 
  
    # def has_delete_permission(self, request, obj = None): 
    #     return False
  
admin.site.register(Vendor,VendorAdmin)

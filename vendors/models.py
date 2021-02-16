from django.db import models
from django.contrib.postgres.fields import JSONField


class Vendor(models.Model):
    # vendor info
    first_name = models.CharField(max_length=100,null=True)
    last_name = models.CharField(max_length=100,null=True)
    email = models.CharField(max_length=100,null=True) 
    password = models.CharField(max_length=200,null=True)   
    phone_number = models.DecimalField(
        max_digits=15, decimal_places=0, default=None,null=True)

    role = models.JSONField(encoder=None,null=True)
    is_authorization = models.DecimalField(
        max_digits=1, decimal_places=0, default=0,null=True)
    # company background
    company_legal_name = models.CharField(max_length=100,null=True)
    website_url = models.CharField(max_length=100,null=True)
    private_label = models.CharField(max_length=100,null=True)
    state_of_formation = models.CharField(max_length=100,null=True)

    # office detail
    address_line1 = models.CharField(max_length=100,null=True)
    address_line2 = models.CharField(max_length=100,null=True)
    city = models.CharField(max_length=100,null=True)
    state = models.CharField(max_length=100,null=True)
    country = models.JSONField(encoder=None,null=True)
    zip_code = models.CharField(max_length=100,null=True)

    # business_detail
    which_market = models.JSONField(encoder=None,null=True)
    sel_fulfillment_countries = models.JSONField(encoder=None,null=True)
    product_count = models.JSONField(encoder=None,null=True)
    annual_total_revenue = models.JSONField(encoder=None,null=True)
    online_selling = models.JSONField(encoder=None,null=True)
    commercial_product = models.JSONField(encoder=None,null=True)
    seller_type = models.JSONField(encoder=None,null=True)
    how_got_site = models.JSONField(encoder=None,null=True)
    note = models.TextField(null=True)

    # requirement
    dropship = models.DecimalField(max_digits=1, decimal_places=0, default=0,null=True)
    product_liability_insurance = models.DecimalField(
        max_digits=1, decimal_places=0,null=True)
    product_categories = models.JSONField(encoder=None,null=True)
    accept_return = models.DecimalField(
        max_digits=1, decimal_places=0, default=0,null=True)

    # is active
    is_active = models.DecimalField(max_digits=1, decimal_places=0, default=0,null=True)
    # created date
    created_at = models.DateTimeField(auto_now_add=True, null=True) 
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.email

    
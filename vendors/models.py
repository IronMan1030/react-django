from django.db import models
from django.contrib.postgres.fields import JSONField


class Vendor(models.Model):
    # vendor info
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_number = models.DecimalField(
        max_digits=15, decimal_places=0, default=None)

    role = models.JSONField(encoder=None)
    is_authorization = models.DecimalField(
        max_digits=1, decimal_places=0, default=0)

    # company background
    company_legal_name = models.CharField(max_length=100)
    website_url = models.CharField(max_length=100)
    private_label = models.CharField(max_length=100)
    state_of_formation = models.CharField(max_length=100)

    # office detail
    address_line1 = models.CharField(max_length=100)
    address_line2 = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.JSONField(encoder=None)
    zip_code = models.CharField(max_length=100)

    # business_detail
    which_market = models.JSONField(encoder=None)
    sel_fulfillment_countries = models.JSONField(encoder=None)
    product_count = models.JSONField(encoder=None)
    annual_total_revenue = models.JSONField(encoder=None)
    online_selling = models.JSONField(encoder=None)
    commercial_product = models.JSONField(encoder=None)
    seller_type = models.JSONField(encoder=None)
    how_got_site = models.JSONField(encoder=None)
    note = models.TextField()

    # requirement
    dropship = models.DecimalField(max_digits=1, decimal_places=0, default=0)
    product_liability_insurance = models.DecimalField(
        max_digits=1, decimal_places=0)
    product_categories = models.JSONField(encoder=None)
    accept_return = models.DecimalField(
        max_digits=1, decimal_places=0, default=0)

    def __str__(self):
        return self.email

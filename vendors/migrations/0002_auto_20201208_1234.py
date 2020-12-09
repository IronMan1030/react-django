# Generated by Django 3.1.2 on 2020-12-08 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendors', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='annual_total_revenue',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='commercial_product',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='country',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='how_got_site',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='online_selling',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='product_categories',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='product_count',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='role',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='sel_fulfillment_countries',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='seller_type',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='which_market',
            field=models.JSONField(),
        ),
    ]

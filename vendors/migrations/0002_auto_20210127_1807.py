# Generated by Django 3.1.4 on 2021-01-27 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendors', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vendor',
            name='city',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='company_legal_name',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='email',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='first_name',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='last_name',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='password',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='private_label',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='state',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='state_of_formation',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='website_url',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vendor',
            name='zip_code',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]

# Generated by Django 4.2.5 on 2023-09-20 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='area_code',
            field=models.CharField(max_length=2, verbose_name='Area Code'),
        ),
    ]

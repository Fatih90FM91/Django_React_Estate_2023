# Generated by Django 3.2.19 on 2023-06-26 13:04

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('email', models.CharField(max_length=200)),
                ('subject', models.CharField(max_length=200)),
                ('message', models.TextField(blank=True)),
                ('contact_date', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]

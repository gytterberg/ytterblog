# Generated by Django 3.1.3 on 2020-11-29 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='protected',
            field=models.BooleanField(default=False),
        ),
    ]

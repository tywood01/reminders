# Generated by Django 5.1.7 on 2025-04-24 18:28

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reminders', '0006_reminder_datetime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reminder',
            name='datetime',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='datetime'),
        ),
    ]

# Generated by Django 5.1.7 on 2025-04-24 18:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reminders', '0007_alter_reminder_datetime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reminder',
            name='datetime',
            field=models.DateTimeField(default=datetime.datetime(2025, 4, 24, 18, 29, 16, 467762, tzinfo=datetime.timezone.utc), verbose_name='datetime'),
        ),
    ]

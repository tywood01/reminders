# Generated by Django 5.1.7 on 2025-04-17 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reminders', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reminder',
            old_name='description',
            new_name='body',
        ),
        migrations.AddField(
            model_name='reminder',
            name='recurring',
            field=models.BooleanField(default=False),
        ),
    ]

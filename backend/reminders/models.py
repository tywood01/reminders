from django.db import models


# Create your models here.
class Reminder(models.Model):
    title = models.CharField(max_length=255, blank=False)
    body = models.TextField(blank=True)
    time = models.TimeField(blank=False)
    recurring = models.BooleanField(default=False)
    date = models.DateField(blank=False)


# Maybe create a model for lists of reminders

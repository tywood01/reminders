from django.db import models


# Create your models here.
class Reminder(models.Model):
    name = models.CharField("name", max_length=255, blank=False, default="")
    body = models.TextField("body", blank=True)
    """time = models.TimeField("time", blank=False)
    recurring = models.BooleanField("recurring", default=False)
    date = models.DateField("date", blank=False) """


# Maybe create a model for lists of reminders

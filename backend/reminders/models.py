"""
models.py
Tytus Woodburn
04/30/2025

Reminder Models
"""

from django.db import models
from django.utils import timezone


# Create your models here.
class Reminder(models.Model):
    class recurChoice(models.TextChoices):
        NO = ("no", "No")
        DAILY = ("daily", "Daily")
        WEEKLY = ("weekly", "Weekly")

    name = models.CharField("name", max_length=255, blank=False, default="")
    body = models.TextField("body", blank=True)
    recurring = models.CharField(
        "recurring", choices=recurChoice, max_length=255, default="no"
    )  # no, daily, weekly
    datetime = models.DateTimeField("datetime", blank=False, default=timezone.now)


# Maybe create a model for lists of reminders

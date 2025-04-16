from reminders import models
from rest_framework import serializers


class ReminderSerializer(serializers.ModelSerializer):
    """Serializes all fields regarding the Reminder model."""

    class Meta:
        model = models.Reminder
        fields = "__all__"

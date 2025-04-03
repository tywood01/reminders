from reminders.models import Reminder
from rest_framework import serializers


class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = ["id", "title", "description", "date", "time"]

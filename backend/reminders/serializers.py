from reminders.models import Reminder
from rest_framework import serializers


class ReminderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reminder
        fields = "__all__"

from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from reminders import models, serializers

# Create your views here.


class TaskViewSet(ModelViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.ReminderSerializer

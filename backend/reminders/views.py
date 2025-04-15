from rest_framework.viewsets import ModelViewSet
from reminders import models, serializers

# Create your views here.


class ReminderViewSet(ModelViewSet):
    """Gets the basic CRUD operations for the reminders"""

    queryset = models.Task.objects.all()
    serializer_class = serializers.ReminderSerializer

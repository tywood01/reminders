"""
urls.py
Tytus Woodburn
04/16/2025

Reminder Urls
"""

from rest_framework import routers
from reminders import views

# Use django rest framework's custom routing
# for handling viewsets.
router = routers.DefaultRouter()
router.register(r"reminders", views.ReminderViewSet)

urlpatterns = router.urls

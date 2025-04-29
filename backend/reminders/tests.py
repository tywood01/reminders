"""
File: tests.py
Author: Reagan Zierke
Date: 2025-04-28
Description: Test cases for the DRF backend.
"""



from django.test import TestCase
from django.urls import reverse
from reminders.models import Reminder

class ReminderDeleteTestCase(TestCase):
    '''
    A test for deleting reminders
    '''

    def setUp(self):
        # Create a test reminder
        self.reminder = Reminder.objects.create(
            name="Test Reminder",
            body="This is a test reminder.",
            recurring="no"
        )
        self.delete_url = reverse('reminder-detail', args=[self.reminder.id])  # Matches DRF's default detail route

    def test_delete_reminder(self):
        # Ensure the reminder exists before deletion
        self.assertEqual(Reminder.objects.count(), 1)

        # Simulate a delete request
        response = self.client.delete(self.delete_url)

        # Check the response status code (204 for successful deletion in DRF)
        self.assertEqual(response.status_code, 204)

        # Ensure the reminder is deleted
        self.assertEqual(Reminder.objects.count(), 0)
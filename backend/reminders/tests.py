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
        self.reminder = Reminder.objects.create(
            name="Test Reminder",
            body="This is a test reminder.",
            recurring="no"
        )
        self.delete_url = reverse('reminder-detail', args=[self.reminder.id])  

    def test_delete_reminder(self):
        self.assertEqual(Reminder.objects.count(), 1)

        response = self.client.delete(self.delete_url)

        self.assertEqual(response.status_code, 204)

        self.assertEqual(Reminder.objects.count(), 0)

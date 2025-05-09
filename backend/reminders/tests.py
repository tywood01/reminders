"""
tests.py
Andrew Fynaardt, Tytus Woodburn, Reagan Zierke
04/28/2025

Reminder Tests
"""

from django.test import TestCase
from reminders.models import Reminder
from django.utils import timezone

# This is bad but it works
now = timezone.now()


# Create your tests here.
class ReminderTestCase(TestCase):
    def setUp(self):
        Reminder.objects.create(
            name="Watch a movie",
            body="Watch Shrek with friends",
            recurring="no",
            datetime=now,
        )
        Reminder.objects.create()

    def test_reminder_create(self):
        """Test creating reminders"""
        movie = Reminder.objects.get(name="Watch a movie")
        self.assertEqual(
            (movie.name, movie.body, movie.recurring, movie.datetime),
            ("Watch a movie", "Watch Shrek with friends", "no", now),
        )

    def test_reminder_create_defaults(self):
        default = Reminder.objects.get(name="")
        self.assertEqual(
            (default.name, default.body, default.recurring), ("", "", "no")
        )

    def test_remidner_edit(self):
        """Test editing reminder fields"""
        movie = Reminder.objects.get(name="Watch a movie")
        Reminder.objects.create(
            name="Watch a second movie",
            body="Watch Shrek 2 with friends",
            recurring="no",
            datetime=now,
        )

        movie.name = "Watch a second movie"
        movie.body = "Watch Shrek 2 with friends"

        self.assertEqual(
            (movie.name, movie.body),
            ("Watch a second movie", "Watch Shrek 2 with friends"),
        )

    def test_reminder_delete(self):
        """Make sure reminder is deleted"""
        movie = Reminder.objects.get(name="Watch a movie")
        movie.delete()
        try:
            movie = Reminder.objects.get(name="Watch a movie")
        except:
            movie = None
        self.assertIsNone(movie)

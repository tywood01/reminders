/**
 * reminders.js
 * Tytus Woodburn, Andrew Fynaardt, Reagan Zierke 
 * 
 */

import { API_URL } from "../constants";

export async function getReminders() {
  const response = await fetch(`${API_URL}/reminders/`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch reminders");

  return await response.json();
}

/**
 * @param {SubmitEvent} event The event caused by submitting the form.
 * @param {string} name The name of the reminders to create.
 * @param {string} body 
 */


export async function createReminder(event, name, body, datetime, recurring) {
  event.preventDefault();
  const response = await fetch(`${API_URL}/reminders/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      body,
      datetime,
      recurring,
    }), 
  });
  if (!response.ok) throw new Error("There was an error creating the reminder");

  return await response.json();
}


export async function deleteReminder(id) {

  const response = await fetch(`${API_URL}/reminders/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete the reminder");
  }

}

export async function updateReminder(id, updatedReminder) {
    const { name, body, datetime, recur } = updatedReminder;

    const response = await fetch(`${API_URL}/reminders/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            body,
            datetime,
            recurring: recur,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to update the reminder");
    }

    return await response.json();
}

export async function getReminderById(id) {
    const response = await fetch(`${API_URL}/reminders/${id}/`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch the reminder");
    }

    return await response.json();
}
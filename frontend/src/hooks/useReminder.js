/**
 * useReminder.js
 * Tytus Woodburn
 * 
 * Reminder Hooks
 */

import { API_URL } from "../constants";
import { useState, useEffect } from "react";


export function useReminderList() {
    
    const [reminders, setReminders] = useState([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(


        () => {
            setLoading(true);
            fetch(`${API_URL}/reminders/`, {
                headers : {
                    "Content-Type" : "application/json",
                },
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            setLoading(false);
            })
            .then((json) => {
                setLoading(false);
                setReminders(json);
            })
            .catch((err) => {
                setError(err);
            })
        },
        [

        ]
    );

    return { reminders, loading, error };
}


export function useReminderCreate() {
    console.log("in useremindercreate");
    const [name, setName] = useState("");
    // Same loading states as before, since
    // we want to show some loading indicators
    // when a form submission is currently ongoing.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successful, setSuccessful] = useState(false);

    /**
     * Create a new task and send the request.
     * @param {SubmitEvent} event The submit event from the form.
     */
    const createReminder = (event) => {
        console.log("in create reminder");

      event.preventDefault();
      setLoading(true);
      fetch(`${API_URL}/reminders/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      })
        .then((response) => {
            console.log("in fetch");

          setLoading(false);
          if (response.ok) {
            console.log("in ok");

            setSuccessful(true);
            return;
          }
          throw new Error("Uh Oh!");
        })
        .catch((err) => {
            console.log(err);
          setError(err);
          setSuccessful(false);
        });
    };
  
    return {
      name,
      setName,
      loading,
      error,
      successful,
      createReminder,
    };
  }
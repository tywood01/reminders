/**
 * ReminderList.jsx
 * Reagan Zierke
 * 
 * Reminder List Page
 */

import React, { userState } from "react";
import "../App.css";
import { useReminderList } from "../hooks/useReminder";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { getReminders } from "../data/reminders";


export function ReminderList() {
	const { isLoading, isError, data, error } = useQuery({
		queryKey: ["reminders"],
		queryFn: getReminders,
	});

	if (isLoading) {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}

	if (isError) {
		return (
			<>
				<h1>Uh Oh!</h1>
				<p>{error.message}</p>
			</>
		);
	}

    return (
        <>
            <h1>Reminders</h1>
            <Link to="/reminders/create">Create a Reminder</Link>
            {data.map((reminder) => (
                <div key={reminder.id}>
                    <h2>{reminder.name}</h2>
                    <h3>{reminder.body}</h3>
                    <h3>date: {reminder.date}</h3>
                    <h3>time: {reminder.time}</h3>
                    <h3>recurring: {reminder.recurring ? "yes" : "no"}</h3>
                    <br/>
                </div>
            ))}
        </>
    );
}
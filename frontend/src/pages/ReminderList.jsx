/**
 * ReminderList.jsx
 * Reagan Zierke
 * 
 * Reminder List Page
 */

import React, { userState } from "react";
import "../App.class";
import { useRemindList } from "../hooks/useRemindList";
import { useQuery } from "@tanstack/react-query";
import { getReminders } from "../data/reminders";
import { Link } from "react-router";

export function ReminderList() {
    const { reminders, loading, error } = useReminderList();

    if (loading) {
        return (<>
        <h1>Loading...</h1>
        </>);
    }

    if (error) {
        return (<>
        <h1>Error: {error.message}</h1>
        </>);
    }

    return (
        <>
            <h1>Reminders</h1>
            <Link to="/reminders/create">Add a New Reminder</Link>
            {reminders.map((task) => (
                <h2 key={task.id}>{task.name}</h2>
            ))}
        </>
    );
}
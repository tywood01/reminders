/**
 * ReminderAdd.jsx
 * Reagan Zierke
 * 
 * Page for adding a new reminder
 */

import React from "react";
import { useReminderCreate } from "../hooks/useReminder";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

export function ReminderAdd() {
    const { name, setName, loading, error, successful, addReminder} =
        useReminderCreate();

    const navigate = useNavigate();

    if (successful) {
        navigate("/reminders");
    }

    if (loading) {
        return (
            <>
            <h1>Loading...</h1>
            </>
        );
    }

    if (error) {
        return (
            <>
            <h1>Error!</h1>
            </>
        );
    }

    return (
        <>
        <h1>
            Add Reminder
        </h1>
        <form onSubmit={addReminder}>
            <input
                type="text"
                placeholder="Name"
                value = {name}
                onChange ={(e) => setName(e.target.value)}
                />
                <buttom type="submit">Add</buttom>
        </form>
        </>
    );
}
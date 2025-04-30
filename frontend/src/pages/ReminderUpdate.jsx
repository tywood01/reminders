/**
 * ReminderUpdate.jsx
 * Reagan Zierke, Tytus Woodburn, Andrew Fynaardt
 * 
 * Page for updating an existing reminder
 */

import React, { useState, useEffect } from "react";
import { updateReminder } from "../data/reminders";
import { useNavigate, useParams } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getReminderById } from "../data/reminders";

export function ReminderUpdate() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the reminder ID from the route params
    const queryClient = useQueryClient();

    // Fetch the existing reminder data
    const { data: reminder, isLoading, isError } = useQuery({
        queryKey: ["reminder", id],
        queryFn: () => getReminderById(id),
    });

    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [datetime, setDatetime] = useState("");
    const [recur, setRecur] = useState("");

    const recurOptions = [
        { name: "No", value: "no" },
        { name: "Daily", value: "daily" },
        { name: "Weekly", value: "weekly" },
    ];

    // Get current fields
    useEffect(() => {
        if (reminder) {
            setName(reminder.name);
            setBody(reminder.body);
            const localDatetime = new Date(reminder.datetime);
            const formatted = localDatetime.toISOString().slice(0, 16);
            setDatetime(formatted);
            setRecur(reminder.recur);
        }
    }, [reminder]);

    const { mutate, isPending, isError: isMutationError } = useMutation({
        mutationFn: (updatedReminder) => updateReminder(id, updatedReminder),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reminders"] });
            navigate("/");
        },
    });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Error loading reminder!</h1>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate({ name, body, datetime, recur });
    };

    return (
        <>
            <h1>Update Reminder</h1>
            <form onSubmit={handleSubmit}>
                <h2>Name</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <h2>Body</h2>
                <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <h2>Datetime</h2>
                <input
                    type="datetime-local"
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                />
                <h2>Recurring?</h2>
                <select
                    value={recur}
                    onChange={(e) => setRecur(e.target.value)}
                >
                    {recurOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <button type="submit">Update</button>
            </form>
        </>
    );
}
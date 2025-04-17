/**
 * ReminderAdd.jsx
 * Reagan Zierke
 * 
 * Page for adding a new reminder
 */

import React, { useState } from "react";
import { useReminderCreate } from "../hooks/useReminder";
import { createReminder } from "../data/reminders";
import { useNavigate } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function ReminderCreate() {
 	// We cannot invoke this call inside of a conditional
	// because of the laws of hooks for React.
	const navigate = useNavigate();

	const queryClient = useQueryClient();
	const [name, setName] = useState("");
    const [body, setBody] = useState("");
	// const { name, setName, loading, error, successful, createTask } =
	// 	useTaskCreate();
	const { isPending, isError, mutate } = useMutation({
		mutationFn: (event) => {
            console.log("inside mutate");

			return createReminder(event, name, body);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["reminders"] });
			navigate("/");
		},
	});
	// if (successful) {
	// 	navigate("/");
	// }

	if (isPending) {
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
			</>
		);
	}

	return (
		<>
			<h1>Create a Reminder</h1>
			<form onSubmit={mutate}>
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
                <br/>
                <br/>
				<button type="submit">Create</button>
			</form>
		</>
	);
}
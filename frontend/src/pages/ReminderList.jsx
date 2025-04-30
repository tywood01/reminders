/**
 * ReminderList.jsx
 * Reagan Zierke, Tytus Woodburn
 * 
 * Reminder List Page
 */

import React from "react";
import "../App.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { getReminders, deleteReminder } from "../data/reminders";

function Reminder({ reminder, deleteMutation }) {
    return <div key={reminder.id}>
          <h2>{reminder.name}</h2>
          <h3>{reminder.body}</h3>
          <h3>When: {reminder.datetime}</h3>
          <h3>recurring: {reminder.recurring}</h3>
          <Link to={`/reminders/${reminder.id}/edit`}>Update</Link>
          <button type="button"
            onClick={() => deleteMutation.mutate(reminder.id)}
            disabled={deleteMutation.isLoading}
          >
            {deleteMutation.isLoading ? "Deleting..." : "Delete"}
          </button>
          <br />
        </div>
}

export function ReminderList() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["reminders"],
    queryFn: getReminders,
  });

const deleteMutation = useMutation({
	mutationFn: deleteReminder,
	onError: (error) => {
		console.error("Error:", error);
	},
	onMutate: () => {
		console.log("Mutate");
	},
	onSuccess: async () => {
		console.log("Success");
		queryClient.invalidateQueries(["reminders"]);
		return await navigate("/");
	},
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
        <Reminder key={reminder.id} reminder={reminder} deleteMutation={deleteMutation} />
      ))}
    </>
  );
}
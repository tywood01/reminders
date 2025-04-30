import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReminderCreate } from "./pages/ReminderAdd.jsx";
import { ReminderList } from "./pages/ReminderList.jsx";
import { ReminderUpdate } from "./pages/ReminderUpdate.jsx";


const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ReminderList />} />
            <Route path="/reminders" element={<ReminderList />} />
            <Route path="/reminders/create" element={<ReminderCreate />} />
            <Route path="/reminders/:id/edit" element={<ReminderUpdate />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)

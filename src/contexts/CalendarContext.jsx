import { createContext, useContext, useEffect, useState } from "react";

const CalendarContext = createContext()

export const CalendarProvider = ({ children }) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(null)
    const [events, setEvents] = useState(() => {
        const storedEvents = localStorage.getItem("events")
        return storedEvents ? JSON.parse(storedEvents) : []
    });
    const [isEventFormOpen, setIsEventFormOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent])
        setIsEventFormOpen(false)
    };

    const handleUpdateEvent = (event) => {
        const updatedEvents = events.map((e) => (e.id === event.id ? event : e));
        setEvents(updatedEvents);
        setIsEventFormOpen(false);
        setEditingEvent(null);
    };

    const handleDeleteEvent = (event) => {
        setEvents(events.filter((e) => e.id !== event.id))
    };

    return (
        <CalendarContext.Provider
            value={{ currentDate, selectedDate, setSelectedDate, handleNextMonth, handlePrevMonth, events, handleAddEvent, handleUpdateEvent, handleDeleteEvent, isEventFormOpen, setIsEventFormOpen, editingEvent, setEditingEvent }}>
            {children}
        </CalendarContext.Provider>
    )
}

export const useCalendar = () => useContext(CalendarContext)
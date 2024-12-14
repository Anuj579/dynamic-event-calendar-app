import React from 'react';
import { Button } from "../components/ui/button"
import { useCalendar } from '../contexts/CalendarContext';
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogTrigger } from "../components/ui/dialog"
import EventForm from './EventForm';

const EventList = () => {
    const { selectedDate, events, isEventFormOpen, setIsEventFormOpen, handleDeleteEvent, editingEvent, setEditingEvent } = useCalendar()
    const filteredEvents = events.filter(event => new Date(event.date).toDateString() === selectedDate.toDateString())

    return (
        <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2 text-white border-b-2 border-gray-700 w-max">Events for {selectedDate.toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</h3>
            {filteredEvents.length === 0 ? (
                <p>No events for this day.</p>
            ) : (
                <ul className="space-y-2">
                    {filteredEvents.map(event => (
                        <li key={event.id} className="border p-2 rounded">
                            <h4 className="font-bold">{event.eventName}</h4>
                            <p>Time: {event.startTime} - {event.endTime}</p>
                            {event.description && <p>Description: {event.description}</p>}
                            <div className="mt-2">
                                <Button onClick={() => {
                                    setEditingEvent(event)
                                    setIsEventFormOpen(true)
                                }} className="mr-2">Edit</Button>
                                <Button onClick={() => handleDeleteEvent(event)} variant="destructive">Delete</Button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <Dialog open={isEventFormOpen} onOpenChange={setIsEventFormOpen}>
                <DialogTrigger asChild>
                    <Button className="mt-4">Add Event</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
                        <DialogDescription className='sr-only'>Event Form</DialogDescription>
                    </DialogHeader>
                    <EventForm />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EventList;


import React from 'react';
import { Button } from "../components/ui/button"
import { useCalendar } from '../contexts/CalendarContext';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle } from "../components/ui/dialog"
import EventForm from './EventForm';
import { PlusIcon } from 'lucide-react';

const EventList = () => {
    const { selectedDate, events, isEventFormOpen, setIsEventFormOpen, handleDeleteEvent, editingEvent, setEditingEvent } = useCalendar()
    const filteredEvents = events.filter(event => new Date(event.date).toDateString() === selectedDate.toDateString())

    return (
        <div className="my-6">
            <div className='flex flex-col-reverse sm:flex-row sm:items-center gap-4'>
                <h3 className="text-xl font-semibold text-white border-b-2 border-gray-800 w-max">Events for {selectedDate.toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</h3>
                <Button variant='' className="" onClick={() => {
                    setIsEventFormOpen(true)
                    editingEvent && setEditingEvent(null)
                }}><PlusIcon size={20} className='mr-1' />Add Event</Button>
            </div>
            {filteredEvents.length === 0 ? (
                <p className='mt-2'>No events for this day.</p>
            ) : (
                <div className="space-y-5 my-4">
                    {filteredEvents.map(event => (
                        <Card key={event.id} className="bg-zinc-900 border-zinc-800">
                            <CardHeader>
                                <CardTitle className="text-white">{event.eventName}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-gray-400">Time: {event.startTime} - {event.endTime}</p>
                                {event.description && <p className="mt-2 text-gray-300">{event.description}</p>}
                                <div className="mt-4 flex space-x-2">
                                    <Button
                                        onClick={() => {
                                            setEditingEvent(event)
                                            setIsEventFormOpen(true)
                                        }}
                                        variant="outline"
                                        size="sm"
                                        className="bg-transparent border-zinc-700 text-white hover:bg-gray-700"
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => handleDeleteEvent(event)}
                                        variant="destructive"
                                        size="sm"
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
            <Dialog open={isEventFormOpen} onOpenChange={setIsEventFormOpen}>
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


import React, { useState } from 'react';
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog"
import { Search } from 'lucide-react'
import { useCalendar } from '../contexts/CalendarContext';

const EventSearch = ({ isOpen, onClose }) => {
    const { events, setIsEventFormOpen, handleDeleteEvent, setEditingEvent } = useCalendar()
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEvents = events.filter(event =>
        event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.date.toString().includes(searchQuery)
    );

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-white flex justify-between items-center">
                        <span>Search Events</span>
                    </DialogTitle>
                    <DialogDescription className='sr-only'>Search box</DialogDescription>
                </DialogHeader>
                <div className="relative mb-4">
                    <Input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 "
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                </div>
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    {filteredEvents.length === 0 ? (
                        <p className="text-gray-400">{events.length === 0 ? 'No events have been saved yet.' : 'No events match your search.'}</p>
                    ) : (
                        filteredEvents.map(event => (
                            <Card key={event.id} className="bg-zinc-900 border-zinc-800">
                                <CardHeader>
                                    <CardTitle className="text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                                        <span>{event.eventName}</span>
                                        <span className="text-sm text-gray-400">
                                            {new Date(event.date).toLocaleString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                        </span>
                                    </CardTitle>
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
                                            className="bg-transparent border-gray-600 text-white hover:bg-gray-700"
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
                        ))
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EventSearch;


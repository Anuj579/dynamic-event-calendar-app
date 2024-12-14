import React, { useEffect, useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { useCalendar } from '../contexts/CalendarContext'

function EventForm() {
    const { selectedDate, handleAddEvent, handleUpdateEvent, editingEvent } = useCalendar()

    const [eventDetails, setEventDetails] = useState({
        date: selectedDate,
        eventName: '',
        startTime: '',
        endTime: '',
        description: ''
    })

    useEffect(() => {
        if (editingEvent) {
            setEventDetails(editingEvent)
        }
    }, [editingEvent])

    const handleInputChange = (e) => setEventDetails({ ...eventDetails, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        const eventData = { ...eventDetails, id: editingEvent ? editingEvent.id : Date.now() }
        try {
            if (editingEvent) {
                handleUpdateEvent(eventData)
            } else {
                handleAddEvent(eventData)
            }
        } catch (error) {
            console.log("Error in adding events:", error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <Label htmlFor="eventName">Event Name</Label>
                <Input
                    id="eventName"
                    name="eventName"
                    type="text"
                    value={eventDetails.eventName}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="startTime">Start Time</Label>
                <Input
                    id="startTime"
                    name="startTime"
                    type="time"
                    value={eventDetails.startTime}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="endTime">End Time</Label>
                <Input
                    id="endTime"
                    name="endTime"
                    type="time"
                    value={eventDetails.endTime}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="description">Description (Optional)</Label>
                <Input
                    id="description"
                    name="description"
                    type="text"
                    value={eventDetails.description}
                    onChange={handleInputChange}
                />
            </div>
            <Button>{editingEvent ? 'Update Event' : 'Add Event'}</Button>
        </form>
    )
}

export default EventForm
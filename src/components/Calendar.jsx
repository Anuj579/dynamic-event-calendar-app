import React, { useEffect, useState } from 'react'
import { useCalendar } from '../contexts/CalendarContext';

function Calendar() {
    const { currentDate, selectedDate, setSelectedDate, events } = useCalendar()

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // returns last day of current month, setting the day to 0 give last day of the previous month
    const firstDayOfMonth = (new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay() + 6) % 7;
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    const emptySlots = Array.from({ length: firstDayOfMonth }, (_, i) => null); // create an array of null values to represent empty slots before the first day of the month

    const handleDateClick = (date) => {
        setSelectedDate(date)
    };

    const isToday = (day) => {
        const today = new Date();
        return day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();
    };
    const isWeekend = (day) => {
        return day === 'Sat' || day === 'Sun';
    };
    const isWeekendDate = (day) => {
        return day === 6 || day === 0;
    };

    const hasEvents = (day) => {
        return events.some(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day &&
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear();
        });
    };

    return (
        <div className='grid grid-cols-7 text-center gap-1 border  p-3 rounded-md'>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className={`font-bold mb-2 ${isWeekend(day) && 'text-red-500'}`}>{day}</div>
            ))}
            {emptySlots.map((_, index) => (
                <div key={`filler-${index}`} className="p-2"></div>
            ))}
            {days.map(day => {
                const isSelected = selectedDate &&
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === currentDate.getMonth() &&
                    selectedDate.getFullYear() === currentDate.getFullYear();
                return (
                    <div
                        key={day}
                        className={`p-2 cursor-pointer
                            ${isToday(day) ? 'border bg-gray-800 font-medium hover:bg-gray-900' : 'hover:bg-zinc-900 '} 
                            ${isSelected ? 'border border-gray-700' : 'border border-transparent'}
                            ${isWeekendDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day).getDay()) && 'text-red-500'}
                            ${hasEvents(day) && 'border-b-blue-600 border-b-4'}`}
                        onClick={() => handleDateClick(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                    >
                        {day}
                    </div>
                );
            })}
        </div>
    )
}

export default Calendar
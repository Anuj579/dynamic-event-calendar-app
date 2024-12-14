import { useState } from 'react'
import Calendar from './components/Calendar'
import { Button } from './components/ui/button'
import { useCalendar } from './contexts/CalendarContext'
import { CalendarDaysIcon } from 'lucide-react'
import EventList from './components/EventList'

function App() {
  const { currentDate, selectedDate, handleNextMonth, handlePrevMonth } = useCalendar()

  return (
    <div className='min-h-screen sm:container p-4'>
      <h1 className='text-3xl font-bold text-white mb-20 flex items-center gap-2'>
        <CalendarDaysIcon size={36} />Dynamic Event Calendar</h1>
      <div className='flex justify-between items-center mb-4'>
        <Button onClick={handlePrevMonth}>Previous</Button>
        <h2 className='text-center text-xl font-semibold text-white'>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <Button onClick={handleNextMonth}>Next</Button>
      </div>
      <Calendar />
      {selectedDate && <EventList />}
    </div>
  )
}

export default App

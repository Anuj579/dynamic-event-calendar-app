import { useState } from 'react'
import Calendar from './components/Calendar'
import { Button } from './components/ui/button'
import { useCalendar } from './contexts/CalendarContext'

function App() {
  const { currentDate, handleNextMonth, handlePrevMonth } = useCalendar()

  return (
    <div className='min-h-screen sm:container p-4'>
      <h1 className='text-3xl font-bold text-white underline mb-20 flex items-center gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>Dynamic Event Calendar</h1>
        <div className='flex justify-between items-center mb-4'>
          <Button onClick={handlePrevMonth}>Previous</Button>
          <h2 className='text-center text-xl font-semibold text-white'>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <Button onClick={handleNextMonth}>Next</Button>
        </div>
        <Calendar />
    </div>
  )
}

export default App

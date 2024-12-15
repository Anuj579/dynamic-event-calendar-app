import Calendar from './components/Calendar'
import { Button } from './components/ui/button'
import { useCalendar } from './contexts/CalendarContext'
import EventList from './components/EventList'
import { useState } from 'react'
import { SearchIcon } from 'lucide-react'
import EventSearch from './components/EventSearch'

function App() {
  const { currentDate, selectedDate, handleNextMonth, handlePrevMonth } = useCalendar()
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className='min-h-screen sm:container p-4'>
      <div className='flex flex-col sm:flex-row gap-4 justify-between sm:items-center mb-14'>
        <h1 className='text-3xl font-bold text-white text-center pb-1 sm:text-left border-b-4 border-blue-600 w-auto sm:w-max'>
          Dynamic Event Calendar</h1>
        <Button onClick={() => setIsSearchOpen(true)} variant="secondary">
          <SearchIcon className="mr-2 h-4 w-4" />
          Search Events
        </Button>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <Button variant='outline' onClick={handlePrevMonth}>Previous</Button>
        <h2 className='text-center text-xl font-semibold text-white'>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <Button variant='outline' onClick={handleNextMonth}>Next</Button>
      </div>
      <Calendar />
      {selectedDate && <EventList />}
      <EventSearch isOpen={isSearchOpen} onClose={setIsSearchOpen} />
    </div>
  )
}

export default App

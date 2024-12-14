import { createContext, useContext, useState } from "react";

const CalendarContext = createContext()

export const CalendarProvider = ({ children }) => {
    const [currentDate, setCurrentDate] = useState(new Date())

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    return (
        <CalendarContext.Provider value={{ currentDate, handleNextMonth, handlePrevMonth }}>
            {children}
        </CalendarContext.Provider>
    )
}

export const useCalendar = () => useContext(CalendarContext)
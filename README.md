# Event Calendar App

A simple and interactive event calendar application built with React. This app allows users to manage events for specific dates, prevent event overlaps, and perform tasks like adding, updating, deleting events, and filtering events based on keywords.

## Features

- **Add, Edit, and Delete Events**: Users can add, update, and delete events on specific dates.
- **Prevent Event Overlaps**: The app checks for overlapping events to ensure that events do not conflict with each other.
- **Event Filtering by Keyword**: Users can filter events by keywords, making it easier to find specific events.
- **Persistent Data Storage**: Events are stored in the browser's local storage, so the data persists even after page refreshes.
- **Visual Representation**: Events are visually represented on the calendar with clear differentiation for weekends and selected dates.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Anuj579/dynamic-event-calendar-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd event-calendar-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the app**:

   ```bash
   npm run dev
   ```

   This will start the app on [http://localhost:5173](http://localhost:5173).

## Usage

### 1. **Add an Event**

- Click on a date to add a new event.
- Fill in the event details such as event name, start time, end time, and description.
- If there are overlapping events, an alert will notify you and prevent the addition.

### 2. **Edit an Event**

- Click on an existing event to edit its details.
- Update the event name, description, or time and save the changes.

### 3. **Delete an Event**

- Click on the delete icon next to an event to remove it from the calendar.

### 4. **Filter Events**

- Use the filter input field to search for events by keywords. The list of events will be filtered based on your input.

### 5. **Prevent Event Overlap**

- If you try to add an event that overlaps with an existing event, an alert will notify you and prevent the action.

## Live Demo

You can see the live version of this project at:

[**Event Calendar App - Live Demo**](https://eventcalendar9.netlify.app/)

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **React Context API**: For managing global state (selected date, events).
- **Local Storage**: For persisting event data in the browser.
- **JavaScript**: For handling event logic and filtering functionality.
- **CSS (Tailwind CSS)**: For styling the app with utility-first CSS.

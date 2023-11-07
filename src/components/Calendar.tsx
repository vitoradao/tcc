import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <h1>Calendário Simples</h1>
      <div className="calendar-container">
        <Calendar value={selectedDate} onChange={handleDateChange} />
      </div>
    </div>
  );
}

export default App;

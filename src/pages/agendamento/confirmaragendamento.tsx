import React, { useState } from "react";

interface CalendarInputProps {
  onTimeSelect: (selectedTime: string) => void;
}

const CalendarInput: React.FC<CalendarInputProps> = ({ onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value);
    onTimeSelect(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="w-1/2 h-screen bg-gray-800">
        {/* Por exemplo, use uma biblioteca de calendário como react-calendar */}
        <h2>Calendário</h2>
        {/* Insira o calendário aqui */}
      </div>
      <div className="w-1/2 h-full bg-gray-900 p-8 mt-40">
        <h2 className="text-3xl text-white font-bold mb-8">
          Agende um horário
        </h2>
        <form>
          <div className="mb-6">
            <label htmlFor="time" className="block text-gray-300 text-lg mb-2">
              Horário:
            </label>
            <input
              type="text"
              value={selectedTime}
              onChange={handleTimeChange}
              placeholder="Selecione um horário"
              className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-700 text-white px-4 py-3 rounded-full cursor-pointer hover:bg-indigo-800 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
              Agendar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalendarInput;

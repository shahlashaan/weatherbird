// src/App.jsx
import React, { useState } from 'react';
import WeatherSong from './components/WeatherSong.jsx';
import './App.css';

function App() {
  const [city, setCity] = useState('Ottawa')

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-indigo-700">🎵 Weather Forecast Song 🎵</h1>
      <input
        type="text"
        placeholder="Enter city (e.g., Toronto, London CA)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="mb-6 p-3 rounded-md border border-indigo-400 w-full max-w-sm text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <WeatherSong city={city} />
    </div>
  )
}

export default App

// import WeatherFetcher from './components/WeatherFetcher';

// function App() {
//   return (
//     <div className="p-4 max-w-xl mx-auto">
//       <WeatherFetcher />
//     </div>
//   );
// }

// export default App

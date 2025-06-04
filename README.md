# 🎵 Weather Forecast Song App
This is a fun weather app that recommends a Spotify song based on the current weather in your selected city! The frontend is built with React and styled with Tailwind CSS. Weather data comes from the OpenWeatherMap API, and songs are selected from a custom weather-to-song map.


## 🌦️ Features
🌍 Enter any city and get real-time weather
🎶 See a Spotify song that matches the weather mood
📱 Clean, mobile-friendly interface
⚡ Fast loading with React hooks and conditional rendering

## 📦 Tech Stack
React (Vite)
Tailwind CSS
OpenWeatherMap API
Spotify embeds (public links)


## 🔧 Project Structure
src/
├── App.jsx                  # Main UI
├── components/
│   └── WeatherSong.jsx      # Component for fetching + displaying weather + song
├── data/
│   └── weatherToSongMap.js  # Static map of weather → song details
├── index.css                # Tailwind base styles
└── main.jsx                 # React entry point

// src/components/WeatherSong.jsx
import React, { useState, useEffect } from 'react'
import { weatherToSongMap } from '../data/weatherToSongMap';

const API_KEY = 'MyAPIKEY' // Get from https://openweathermap.org/api

export default function WeatherSong({ city = 'Ottawa' }) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                const data = await res.json();
                if (res.ok) {
                    setWeather(data);
                } else {
                    setError(data.message || 'Error fetching weather');
                }
            } catch (e) {
                setError(e.message);
            }
            setLoading(false);
        }

        fetchWeather();
    }, [city]);

    if (loading) return <div className="text-yellow-700 text-xl">Loading weather...</div>
    if (error) return <div className="text-red-500 text-xl">Error: {error}</div>


    const condition = weather.weather[0].main;
    const song = weatherToSongMap[condition] || {
        lyric: "Don't Wanna Know",
        artist: "Maroon 5",
        link: "https://open.spotify.com/embed/track/5MFzQMkrl1FOOng9tq6R9r?utm_source=generator"
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-blue-50 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-2">{weather.name} Weather</h2>
            <p className="text-xl mb-4">{condition} — {weather.main.temp}°C</p>

            {song && song.link ? (
                <>
                    <p className="mb-2 font-semibold">{song.lyric} — {song.artist}</p>
                    <iframe
                        src={song.link}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="rounded-md"
                    ></iframe>
                </>
            ) : (
                <p className="text-gray-600 italic">No matching song found for this weather.</p>
            )}
        </div>
    );
}
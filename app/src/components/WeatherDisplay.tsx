import React from 'react';

interface WeatherDisplayProps {
    temperature: number,
    description: string,
    wind: number,
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ temperature, description, wind }) => {
    return (
        <div>
            <h2>Weather Information</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Description: {description}</p>
            <p>Wind Speed: {wind} m/s</p>
        </div>
    );
};

export default WeatherDisplay;

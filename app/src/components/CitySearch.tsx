import React, { useState } from 'react';
import Input from "./Input";

interface CitySearchProps {
    onSearch: (city: string) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
    };

    return (
        <div>
            <Input
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onSubmit={handleSearch}
            />
        </div>
    );
};

export default CitySearch;
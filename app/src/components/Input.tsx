import React from 'react';

interface InputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange, onSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default Input;
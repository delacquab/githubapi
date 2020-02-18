import React from 'react';

// import { Container } from './styles';

export default function Input({ value, onChange, onKeyPress }) {
    return (
        <div>
            <input
                data-test="entrada"
                type="text"
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            >
            </input>
        </div>
    );
}

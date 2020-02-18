import React from 'react';

// import { Container } from './styles';

export default function Title(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}

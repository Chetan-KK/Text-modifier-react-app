import React from 'react';
import './css/NavBar.css';

export default function NavBar(props) {
    return (
        <header className='flex'>
            <h1 className='logo'>{props.title}</h1>
            <nav>
                <a href="/" className="link">Home</a>
                <a href="/" className="link">About</a>
                <a href="/" className="link">Projects</a>
                <a href="/" className="link">Contact</a>
            </nav>
        </header>
    );
}
import React, { useState } from 'react';
import './css/NavBar.css';


export default function NavBar(props) {

    function darkMode() {
        document.body.classList.remove('lightMode');
        setModeText(<i className="fa-solid fa-sun"></i>);
        document.cookie = 'mode=light';
    }
    function lightMode() {
        document.body.classList.add('lightMode');
        setModeText(<i className="fa-solid fa-moon"></i>);
        document.cookie = 'mode=dark';
    }

    const [modeText, setModeText] = useState(<i className="fa-solid fa-sun"></i>);

    function handleModeChange() {
        if (document.cookie === 'mode=light') {
            lightMode();
        }
        else {
            darkMode();
        }
    }

    return (
        <header className='flex'>
            <h1 className='logo'>{props.title}</h1>
            <nav className='flex'>
                <span className='link' id='modeChangeButton' onClick={handleModeChange}>{modeText}</span>
                <a href="/" className="link">Home</a>
                <a href="/" className="link">About</a>
                <a href="/" className="link">Projects</a>
                <a href="/" className="link">Contact</a>
            </nav>
        </header>
    );

}
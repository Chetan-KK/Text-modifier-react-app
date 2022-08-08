import React, { useState } from 'react';
import './css/NavBar.css';
document.cookie = 'mode=light';

export default function NavBar(props) {

    const [modeText, setModeText] = useState(<i class="fa-solid fa-sun"></i>);

    function handleModeChange() {
        if (document.cookie === 'mode=light') {
            document.body.classList.add('lightMode');
            setModeText(<i class="fa-solid fa-moon"></i>);
            document.cookie = 'mode=dark';
        }
        else {
            document.body.classList.remove('lightMode');
            setModeText(<i class="fa-solid fa-sun"></i>);
            document.cookie = 'mode=light';
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
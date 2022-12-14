import React, { useState } from 'react';
import './css/NavBar.css';
import { Link } from 'react-router-dom';


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

    function openNav() {
        let nav = document.getElementById('nav');
        nav.style.transform = 'translateX(0vw)';
    }

    function closeNav() {
        let nav = document.getElementById('nav');
        nav.style.transform = 'translateX(80vw)';
    }

    function changeTheme() {
        let color = document.getElementById('colorForTheme');
        let root = document.querySelector(':root');
        root.style.setProperty('--text-color', color.value);
    }

    return (
        <header className='flex'>
            <h1 className='logo'>{props.title}</h1>
            <span className='link' id='navToggle' onClick={openNav}>☰</span>
            <nav className='flex' id='nav'>
                <span className='link' id='navToggleClose' onClick={closeNav}>&times;</span>
                <span className='link' id='modeChangeButton' onClick={handleModeChange}>{modeText}</span>
                <Link to="/" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <a href="/" className="link">Projects</a>
                <a href="/" className="link">Contact</a>
                <span className='link'>select a color for dark mode</span>
                <input type="color" id='colorForTheme' onChange={changeTheme} />
            </nav>
        </header>
    );

}
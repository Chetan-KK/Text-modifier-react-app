import React, { useState } from 'react';
import './css/TextModifyFrom.css';

export default function TextModifyFrom() {

    function handleOnChange(e) {
        setText(e.target.value);
    }
    function handleUpperButton() {
        let newText = text.toUpperCase();
        setText(newText);
    }

    function handleLowerButton() {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const [text, setText] = useState('enter your text here');
    return (
        <div className='form flex' action="">
            <h1>Your text :</h1>
            <textarea name="text" value={text} onChange={handleOnChange} placeholder='Enter Text'></textarea>
            <div className="buttons flex">
                <button onClick={handleUpperButton}>Convert to Uppercase</button>
                <button onClick={handleLowerButton}>Convert to Lowercase</button>
            </div>
            <div className="summary">
                <h1 className="title">Your content summary</h1>
                <ul>
                    <li>
                        No. of characters: {text.length}
                    </li>
                    <li>
                        No. of words: {(text.split(' ').length) - 1}
                    </li>
                </ul>
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import './css/TextModifyFrom.css';


export default function TextModifyFrom() {

    const [text, setText] = useState('');

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
    function handleClearButton() {
        setText('');
    }
    function handleAutoTextButton() {
        setText(text + 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In dolore temporibus est debitis? Voluptate recusandae architecto consequatur sed itaque ratione reiciendis officia labore quas dolore accusamus voluptas ad, praesentium suscipit.(extra text is added)');
    }

    function handleCopyButton() {
        var copyText = document.getElementById("textarea");


        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);

        alert("Text copied: " + copyText.value);

    }
    function handleExtraSpaceButton() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    const [justify, setJustify] = useState('Show in Justified filter');

    function handleJustifyButton() {
        let textarea = document.getElementById('textarea');

        if (textarea.style.textAlign === 'justify') {
            setJustify('Show in Justified filter');
            textarea.style.textAlign = 'unset';
        }
        else {
            setJustify('Remove justified filter');
            textarea.style.textAlign = 'justify';
        }
    }

    return (
        <div className='form flex'>
            <h1>Your text :</h1>
            <textarea name="text" value={text} onChange={handleOnChange} placeholder='Enter Text Here' id='textarea'></textarea>
            <div className="buttons flex">

                <button onClick={handleAutoTextButton}>create dummy text</button>
                <button onClick={handleUpperButton}>Convert to Uppercase</button>
                <button onClick={handleLowerButton}>Convert to Lowercase</button>
                <button onClick={handleJustifyButton}>{justify}</button>
                <button onClick={handleClearButton}>Clear All</button>
                <button onClick={handleExtraSpaceButton}>Remove Extra Spaces</button>
                <button onClick={handleCopyButton}>Copy Modified Text</button>
            </div>
            <div className="summary">
                <h1 className="title">Your content summary :</h1>
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
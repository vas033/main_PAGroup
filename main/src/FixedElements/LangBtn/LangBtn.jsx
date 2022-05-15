import React from 'react';
import './style.css';

export default function LangBtn() {
        const handler = () => {
                document.querySelectorAll('.mainpage__langBtn--btn')
                        .forEach((el) => {
                                el.classList.toggle('mainpage__langBtn--hidden')
                        })
        };
        
        return (
                <button className='mainpage__langBtn' onClick={handler} >
                        <span className='mainpage__langBtn--btn'>EN</span>
                        <span className='mainpage__langBtn--btn mainpage__langBtn--hidden'>RU</span>
                </button>
        )
}
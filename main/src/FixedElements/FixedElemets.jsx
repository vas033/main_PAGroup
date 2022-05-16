import React from 'react';
import './style.css';
import Logo from './Logo/Logo';
import LangBtn from './LangBtn/LangBtn';
import MusicBtn from './MusicBtn/MusicBtn';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import ProgressBar from './ProgressBar/ProgressBar';

export default function FixedElements() {

        return (
                <div id='fixedEl' className='mainpage__fixedEl'>
                        <div style={{ position: 'absolute', zIndex: '3' }}>
                        <Logo />
                        <LangBtn />
                        </div>
                        <div id="burgerSide" style={{ position: 'absolute' }}>
                                <MusicBtn />
                                <BurgerMenu />
                        </div>
                </div>
        )
}
import './style.css';
import navArr from '../../arrays/navArr.js';
import { useState, useEffect } from 'react';
import BurgerDesc from './BurgerDesc/BurgerDesc'
import Btn from '../../Btn/Btn';

export default function BurgerMenu() {

        const [links, setLinks] = useState(navArr);
        const [openMenu, setOpenMenu] = useState(false);
        
        const handler = () => {
                setOpenMenu(!openMenu);
                document.querySelector('.mainpage__burgerMenu--btn').classList.toggle('mainpage__burgerMenu--open');
        }
        
        useEffect(() => {
                const burgerSideBar = document.getElementById('burgerSide');
                if (openMenu && burgerSideBar) {
                        burgerSideBar.style.setProperty('--main-color', '#131027');
                } else {
                        burgerSideBar.style.removeProperty('--main-color', '#131027');
                }
        }, [openMenu])

        return (
                <div className="mainpage__burgerMenu--container">
                        <button className="mainpage__burgerMenu--btn" onClick={handler}>
                                <span className="mainpage__burgerMenu--burger">
                                        <span></span>
                                        <span></span>
                                </span>
                        </button>
                        <div className="mainpage__burgerMenu--menu">
                                <BurgerDesc />
                                <nav className="mainpage__burgerMenu--nav">
                                        <div>
                                                {links.map(el => {
                                                        return (
                                                                <a href='#' className="mainpage__burgerMenu--navlink" key={links.indexOf(el)}>
                                                                        <h3 className="mainpage__burgerMenu--linkName">{el.name}</h3>
                                                                        <p className="mainpage__burgerMenu--linkDesc">{el.description}</p>
                                                                </a>
                                                        )
                                                })}
                                        </div>
                                        <div className="burger__btns--links">
                                                <Btn name='оставить заявку' link='#' />
                                                <Btn name='презентация' link='#' />
                                        </div>
                                </nav>
                        </div>
                </div>
        )
}
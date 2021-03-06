import React from 'react';
import './style.css';
import navArr from '../../modules/arrays/navArr.js';
import { useState, useEffect } from 'react';
import BurgerDesc from './BurgerDesc/BurgerDesc'
import Btn from '../../modules/components/Btn/Btn';
import { Link } from 'react-router-dom';
import findLink from '../../modules/func/findLink';

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
                                                        const result = findLink(el.link);
                                                        
                                                        if (result) {
                                                                return (
                                                                        <a href={el.link} target='_blanc' className="mainpage__burgerMenu--navlink" key={links.indexOf(el)}>
                                                                                <h3 className="mainpage__burgerMenu--linkName">{el.name}</h3>
                                                                                <p className="mainpage__burgerMenu--linkDesc">{el.description}</p>
                                                                        </a>
                                                                )
                                                        } else {
                                                                return (
                                                                        <Link to={el.link} className="mainpage__burgerMenu--navlink" key={links.indexOf(el)}>
                                                                                <h3 className="mainpage__burgerMenu--linkName">{el.name}</h3>
                                                                                <p className="mainpage__burgerMenu--linkDesc">{el.description}</p>
                                                                        </Link>
                                                                )
                                                        }
                                                })}
                                        </div>
                                        <div className="burger__btns--links">
                                                <Btn name='???????????????? ????????????' link='#' />
                                                <Btn name='??????????????????????' link='#' />
                                        </div>
                                </nav>
                        </div>
                </div>
        )
}
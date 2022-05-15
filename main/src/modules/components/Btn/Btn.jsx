import React from 'react';
import { Link } from 'react-router-dom';
import findLink from '../../func/findLink';
import './style.css';

export default function Btn({name, link}) {
        const result = findLink(link);

        if (result) {
                return (
                        <a href={link} className="mainpage__btn" target='_blank'>
                                {name}
                        </a>
                )
        } else {
                return (
                        <Link to={link} className="mainpage__btn" >
                                {name}
                        </Link>
                )
        }
}
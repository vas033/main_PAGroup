import { useEffect, useState } from 'react'
import './style.css'

export default function ProgressBar({ scroll, breakpoints }) {

        const barParts = [{
                label: 'progressBarDevelop',
                imgPart: 'firstPart'
        },
        {
                label: 'progressBarCreative',
                imgPart: 'secondPart'
        },
        {
                label: 'progressBarMarketing',
                imgPart: 'thirdPart'
        }];



        // useEffect(() => {

        if (breakpoints.length > 0) {
                breakpoints.forEach((obj, i) => {

                        if (scroll >= obj.point) {
                                const ids = Object.values(barParts[i]);
                                ids.forEach(el => {
                                        const elem = document.getElementById(el);
                                        elem.style.setProperty('--progressbar-main-color', obj.color);
                                        elem.style.setProperty('--progressbar-focus', obj.color);
                                })

                        };
                })
        }
        // }, [])


        return (
                <div className='mainpage__progressBar'>
                        <div className="mainpage__progressBar--desc">
                                <span id='progressBarDevelop' className="mainpage__progressBar--name">Разработка</span>
                                <span id='progressBarCreative' className="mainpage__progressBar--name">Креативная</span>
                                <span id='progressBarMarketing' className="mainpage__progressBar--name">Маркетинг</span>
                        </div>
                        <div className="mainpage__progressBar--img">
                                <svg id='progressBar' width="354" height="24" viewBox="0 0 354 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id='firstPart'>
                                                <circle cx="12" cy="12" r="11" stroke="var(--progressbar-main-color)" strokeOpacity="0.25" strokeWidth="2" />
                                                <circle cx="12" cy="12" r="6" fill="var(--progressbar-focus)" />
                                                <g clipPath="url(#clip0_1133_2303)">
                                                        <rect x="165" y="11" width="2.00001" height="141" transform="rotate(90 165 11)" fill="var(--progressbar-main-color)" fillOpacity="0.25" />
                                                        <rect x="75" y="11" width="2" height="51" transform="rotate(90 75 11)" fill="var(--progressbar-focus)" />
                                                </g>
                                        </g>
                                        <g id="secondPart">
                                                <circle id='progressBarSecondCircle' cx="177" cy="12" r="11" stroke="var(--progressbar-main-color)" strokeOpacity="0.25" strokeWidth="2" />
                                                <circle cx="177" cy="12" r="6" fill="var(--progressbar-focus)" />
                                                <g clipPath="url(#clip1_1133_2303)">
                                                        <rect x="330" y="11" width="2.00001" height="141" transform="rotate(90 330 11)" fill="var(--progressbar-main-color)" fillOpacity="0.25" />
                                                        <rect x="240" y="11" width="2" height="51" transform="rotate(90 240 11)" fill="var(--progressbar-focus)" />
                                                </g>
                                        </g>
                                        <g id="thirdPart">
                                                <circle id='progressBarThirdCircle' cx="342" cy="12" r="11" stroke="var(--progressbar-main-color)" strokeOpacity="0.25" strokeWidth="2" />
                                                <circle cx="342" cy="12" r="6" fill="var(--progressbar-focus)" />
                                        </g>
                                </svg>
                        </div>
                </div>

        )
}
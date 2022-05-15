import React from 'react';
import BackAnim from './BackAnim/BackAnim';
import './style.css';

export default function Develop() {
        return (
                <section id='develop' className="develop">
                                <BackAnim />
                        <div className="content" style={{zIndex:1}}>
                                <h2 className="title">Команда разработки</h2>
                                <p className="desc">
                                        Blockchain проекты • Компьютерное зрение • IT аутстаффинг • Мобильные приложения и веб-сервисы • Кибербезопасность • Администрирование IT инфраструктуры
                                </p>
                                <a href="https://vas033.github.io/new_landing_PAGroup/" className="develop__btn" target='_blank'>
                                        <svg width="273" height="64" viewBox="0 0 273 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g className="develop__btn--shadow">
                                                        <path d="M272.5 64H23.5L0.5 41.3538V22.6462V18.5V10.5V0H180.5L185.5 4.92308H254.5L272.5 22.6462V64Z" fill="#3D67FF" />
                                                </g>
                                                <defs>
                                                        <filter id="filter0_d_268_617" x="0" y="0" width="273" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                                <feOffset />
                                                                <feGaussianBlur stdDeviation="10" />
                                                                <feComposite in2="hardAlpha" operator="out" />
                                                                <feColorMatrix type="matrix" values="0 0 0 0 0.879167 0 0 0 0 0.879167 0 0 0 0 0.879167 0 0 0 0.4 0" />
                                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_268_617" />
                                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_268_617" result="shape" />
                                                        </filter>
                                                </defs>
                                        </svg>
                                        <span className='develop__btn--name'>Перейти на сайт</span>
                                </a>
                        </div>
                </section>
        )
}
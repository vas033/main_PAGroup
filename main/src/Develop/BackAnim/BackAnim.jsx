import React from 'react';
import './style.css';

export default function BackAnim() {
        return (
                <div className="develop__anim">
                        <svg width="1916" height="1080" viewBox="0 0 1916 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g className="anim__left">
                                        <g className="anim__left--first--circle--cont">
                                                <circle className="anim__left--first--circle" opacity="0.3" cx="294" cy="495" r="12" stroke="#3D67FF" strokeWidth="4"></circle>
                                        </g>
                                        <g className="anim__left--second--circle--cont">
                                                <circle className="anim__left--second--circle" opacity="0.3" cx="444.5" cy="495" r="12" stroke="#3D67FF" strokeWidth="4"></circle>
                                        </g>
                                        <g className="anim__left--bottom">
                                                <path opacity="0.3" d="M0 1069H159.555 L444.5 716V507" stroke="#3D67FF" />
                                                <path className="anim__left--bottom--anim" d="M0 1069H159.555 L444.5 716V507" stroke="#3D67FF" strokeDasharray="26 220%" strokeDashoffset="168%" strokeWidth="3" />
                                        </g>
                                        <g className="anim__left--start">
                                                <path opacity="0.3" d="M2.99977 -17.0002V495 H282.5 " stroke="#3D67FF" />
                                                <path className="anim__left--start--line" d="M2.99977 -17.0002V495 H282.5" strokeDasharray="26 50%" stroke="#3D67FF" strokeWidth="4" />
                                        </g>
                                        <g className="anim__left--top">
                                                <path opacity="0.3" d="M293.5 0.447192 V483 " stroke="#3D67FF" />
                                                <path className="anim__left--top--line" d="M293.5 0.447192 V483 " stroke="#3D67FF" strokeDasharray="26 36%" strokeDashoffset="39%" strokeWidth="4" />
                                        </g>
                                        <g className="anim__left--first--horizontal">
                                                <path opacity="0.3" d="M306.5 495 H432.5" stroke="#3D67FF" />
                                                <path className="anim__left--first--horizontal--line" d="M306.5 495 H432.5" stroke="#3D67FF" strokeDasharray="26 10%" strokeDashoffset="3%" strokeWidth="4" />
                                        </g>
                                        <g className="anim__left--second--horizontal">
                                                <path opacity="0.3" d="M458.5 495 H483" stroke="#3D67FF" />
                                        </g>
                                </g>

                                <g className="anim__right">
                                        <g className="anim__right--first--circle--cont">
                                                <circle className="anim__right--first--circle" opacity="0.3" cx="1628" cy="495" r="12" stroke="#3D67FF" strokeWidth="4"></circle>
                                        </g>
                                        <g className="anim__right--second--circle--cont">
                                                <circle className="anim__right--second--circle" opacity="0.3" cx="1477" cy="495" r="12" stroke="#3D67FF" strokeWidth="4"></circle>
                                        </g>
                                        <g className="anim__right--first--horizontal">
                                                <path opacity="0.3" d="M2020 495H1640" stroke="#3D67FF" />
                                                <path className="anim__right--first--horizontal--line" d="M2020 495H1640" stroke="#3D67FF" strokeWidth="4" strokeDasharray="26 23%" />
                                        </g>
                                        <g className="anim__right--top">
                                                <path opacity="0.3" d="M1628 483 V274 L1912.72 -78.3721" stroke="#3D67FF" />
                                                <path className="anim__right--top--line" d="M1628 483 V274 L1912.72 -78.3721" stroke="#3D67FF" strokeWidth="4" strokeDasharray=" 26 40%" strokeDashoffset="44%" />
                                        </g>
                                        <g className="anim__right--second--horizontal">
                                                <path opacity="0.3" d="M1616 495H1489" stroke="#3D67FF" />
                                                <path className="anim__right--second--horizontal--line" d="M1616 495H1489" stroke="#3D67FF" strokeWidth="4" strokeDasharray="26 10%" strokeDashoffset="3%" />
                                        </g>
                                        <g className="anim__right--bottom">
                                                <path opacity="0.3" d="M1477 507 V1080 H1681.38 V1021.04 H2020" stroke="#3D67FF" />
                                                <path className="anim__right--bottom--line" d="M1477 507 V1080 H1681.38 V1021.04 H2020" stroke="#3D67FF" strokeDasharray="26 70%" strokeDashoffset="74%" strokeWidth="4" />
                                        </g>
                                        <g className="anim__right--horizontal">
                                                <path opacity="0.3" d="M1465 495H1435" stroke="#3D67FF" />
                                        </g>
                                </g>
                        </svg>

                        <svg width="953" height="776" viewBox="0 0 953 776" fill="#0A0A22" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.3" x="1" y="1" width="951" height="774" stroke="#3D67FF" />
                                <rect className="anim__square" x="1" y="1" width="950" height="772" stroke="#3D67FF" strokeDasharray="26 195%" strokeWidth="4" />
                        </svg>
                </div>
        )
}
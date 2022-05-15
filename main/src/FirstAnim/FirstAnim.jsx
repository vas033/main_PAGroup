import React, { useEffect } from 'react';
import './style.css';

export default function FirstAnim() {
        useEffect(() => {
                document.querySelectorAll('.firstAnim__div').forEach((el, i) => {
                        const delay = 0.3 * i;
                        el.setAttribute('style', `transition-delay: ${delay}s; transform: scaleY(1)`);
                })
        })

        setTimeout(() => {
                document.getElementById('firstAnim').style.top = '-100%';
        }, 2000);
        
        return (
                <section id="firstAnim" className='firstAnim'>
                        <h1 className='firstAnim__title'>
                                <div>
                                        <div className='firstAnim__div firstAnim__first'>Превращаем&nbsp;</div>
                                        <div className='firstAnim__div firstAnim__second'>идеи </div>
                                </div>
                                <div>
                                        <div className='firstAnim__div firstAnim__third'>в работающий&nbsp;</div>
                                        <div className='firstAnim__div firstAnim__fourth'>бизнес</div>
                                </div>
                        </h1>
                </section>
        )
};
import React from 'react';
import Content from "../modules/components/Content/Content";
import './style.css';

export default function Plug() {
        document.getElementById('mainpage').style.setProperty('--main-color', '#131027')
        return (
                <section className='plug'>
                        <Content
                                title={'Раздел \n в разработке'}
                                desc='Приносим свои извинения, раздел находится в разработке'
                                btnName='перейти на главную'
                                btnLink='/'
                                userId='not_found'
                        />
                </section>
        )
}
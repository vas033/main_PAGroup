import React from 'react';
import Content from "../modules/components/Content/Content";
import './style.css';

export default function Marketing() {
        return (
                <section id='marketing' className="marketing">
                        <Content
                                title={'Команда маркетинга'}
                                desc='В ближайшее время мы сформируем команду и выйдем на рынок. Не злитесь ;)'
                                btnName='Оставить заявку'
                                btnLink='marketing'
                                userId='marketing'
                        />
                </section>
        )
}
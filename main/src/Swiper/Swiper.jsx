import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';
import Marketing from '../Marketing/Marketing';
import Plug from '../Plug/Plug';

// function BtnSwiper (className, index) {
//         return (

//         )
// }

export default () => {
        return (
                <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                                clickable: true,
                                bulletActiveClass: 'active',
                                bulletElement: 'div',
                                renderBullet: (index, className) => {
                                        const arr = ['Разработка', 'Креативная', 'Маркетинг'];
                                        if (index !== 3) {
                                                return (
                                                        '<div class="' + className + '">' +
                                                        '<div>' + arr[index] + '</div>' +
                                                        `<div>
                                                        <svg  width="354" height="24" viewBox="0 0 354 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g >
                                                                <circle cx="12" cy="12" r="11" stroke="blue" strokeOpacity="0.25" strokeWidth="2" />
                                                                <circle class="customCircle" cx="12" cy="12" r="6" fill="blue" />
                                                                <g clipPath="url(#clip0_1133_2303)">
                                                                        <rect x="165" y="11" width="2.00001" height="141" transform="rotate(90 165 11)" fill="blue" fillOpacity="0.25" />
                                                                        <rect x="75" y="11" width="2" height="51" transform="rotate(90 75 11)" fill="blue" />
                                                                </g>
                                                        </g>
                                                </svg>
                                                </div>`
                                                        + '</div>'
                                                )
                                        } else {
                                                return (
                                                        '<div class="' + className + '">' +
                                                        '<div>' + arr[index] + '</div>' +
                                                        `<div>
                                                        <svg  width="354" height="24" viewBox="0 0 354 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                                <circle cx="12" cy="12" r="11" stroke="blue" strokeOpacity="0.25" strokeWidth="2" />
                                                                <circle class="customCircle" cx="12" cy="12" r="6" fill="blue" />
                                                        </g>
                                                </svg>
                                                </div>`
                                                        + '</div>'
                                                ) 
                                        }
                                }
                        }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                >
                        <SwiperSlide>{<div style={{ background: 'violet', height: '50vh', width: '100vw' }} />}</SwiperSlide>
                        <SwiperSlide>{<div style={{ background: 'aqua', height: '50vh', width: '100vw' }} />}</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        
      ...
                </Swiper>
        );
};
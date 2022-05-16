import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './style.css';
import Marketing from '../Marketing/Marketing';
import Plug from '../Plug/Plug';
import Develop from '../Develop/Develop';
import Creative from '../Creative/Creative';

// function BtnSwiper (className, index) {
//         return (

//         )
// }

export default () => {
        const arr = [{
                title: 'Разработка',
                classTitle: 'bullet__develop',
                lineId: 'developLine',
                color: '#fff',
                bulletId: 'developBullet'
        }, {
                title: 'Креативная',
                classTitle: 'bullet__creative',
                lineId: 'creativeLine',
                color: '#3E24EA',
                bulletId: 'creativeBullet'
        }, {
                title: 'Маркетинг',
                classTitle: 'bullet__marketing',
                lineId: 'marketingLine',
                color: '#C84E89',
                bulletId: 'marketingBullet'
        }];

        const speed = 15000;

        const lineAnim = (id) => {
                const line = document.getElementById(id);
                line.style.setProperty('animation', `lineAnim ${speed}ms linear`);
                setTimeout(() => {
                        line.style.removeProperty('animation');
                }, speed)
        }

        return (
                <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                                delay: speed,
                        }}
                        pagination={{
                                clickable: true,
                                bulletActiveClass: 'active',
                                bulletElement: 'div',
                                renderBullet: (index, className) => {
                                        if (index !== 2) {
                                                return (
                                                        '<div id="' + arr[index].bulletId + '" class="' + className + '">' +
                                                        '<div class="bullet--name ' + arr[index].classTitle + '">' + arr[index].title + '</div>' +
                                                        `<div>
                                                        <svg  width="165" height="24" viewBox="0 0 165 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="12" r="11" stroke="var(--progressbar-main-color)" strokeOpacity="0.25" strokeWidth="2" />
                                                        <circle class="customCircle" cx="12" cy="12" r="6" fill="none" />
                                                        <g >
                                                        <rect x="24" y="11" width="141" height="2"  fill="var(--progressbar-main-color)" fillOpacity="0.25" />
                                                                        <rect id="${arr[index].lineId}" x="24" y="11" width="141" height="2"  fill="var(--progressbar-active-color)" stroke="var(--progressbar-active-color)" stroke-opacity="0.25" fillOpacity="0.25" />
                        
                                                                </g>
                                                        
                                                </svg>
                                                </div>`
                                                        + '</div>'
                                                )
                                        } else {
                                                return (
                                                        '<div id="' + arr[index].bulletId + '" class="' + className + '">' +
                                                        '<div class="bullet--name ' + arr[index].classTitle + '">' + arr[index].title + '</div>' +
                                                        `<div>
                                                                <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="12" cy="12" r="11" stroke="var(--progressbar-main-color)" strokeOpacity="0.25" strokeWidth="2" />
                                                                <circle class="customCircle" cx="12" cy="12" r="6" fill="none" />
                                                        </svg>
                                                        </div>`
                                                        + '</div>'
                                                )
                                        }
                                }
                        }}
                        onSwiper={(swiper) => {
                                const index = swiper.activeIndex;
                                lineAnim(arr[index].lineId);
                                const current = document.getElementById(arr[index].bulletId);
                                const fixed = document.getElementById('fixedEl');
                                fixed.setAttribute('style', `--main-color: ${arr[index].color}`);
                                current.setAttribute('style', `--progressbar-active-color: ${arr[index].color}`);
                        }}
                        onSlideChange={(swiper) => {
                                const index = swiper.activeIndex;
                                const current = document.getElementById(arr[index].bulletId);
                                current.setAttribute('style', `--progressbar-active-color: ${arr[index].color}`);
                                const fixed = document.getElementById('fixedEl');

                                if (index > 0) {
                                        fixed.setAttribute('style', `--main-color: #131027`);
                                } else {
                                        fixed.setAttribute('style', `--main-color: ${arr[0].color}`);
                                }
                                if (index !== 2) {
                                        lineAnim(arr[index].lineId)
                                }

                        }}
                >
                        <SwiperSlide>
                                <Develop />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Creative />
                        </SwiperSlide>
                        <SwiperSlide>
                                <Marketing />
                        </SwiperSlide>

      ...
                </Swiper>
        );
};
import React from 'react';
import FixedElements from './FixedElements/FixedElemets';
import './App.css';
import Plug from './Plug/Plug';
import Marketing from './Marketing/Marketing';
import Creative from './Creative/Creative';
import Develop from './Develop/Develop';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
  const [pos, setPos] = useState(0);
  const [blockId, setBlockId] = useState([{ id: 'develop', color: '#fff' }, { id: 'creative', color: '#3E24EA' }, { id: 'marketing', color: 'linear-gradient(90deg, #C84E89 0%, #F15F79 100%);' }]);
  const [breakpoints, setBreakpoints] = useState([]);

  const handleScroll = (e) => {
    const container = e.target;
    const scroll = container.scrollLeft;
    setPos(scroll);
  };

  useEffect(() => {
    const arr = [];
    blockId.map(el => {
      const obj = {};
      obj.point = document.getElementById(el.id).getBoundingClientRect().left;
      obj.color = el.color;
      arr.push(obj);
    })
    setBreakpoints(arr);

  }, [])

  useEffect(() => {
    const container = document.getElementById('mainpage');

    if (pos < 2) {
      container.style.setProperty('--main-color', '#fff');
      container.style.setProperty('--progressbar-main-color', '#44447A');
    } else {
      container.style.setProperty('--main-color', '#131027');
    }

  }, [pos]);


  return (
    <BrowserRouter>
        <main id='mainpage'  onScroll={(e) => handleScroll(e)}>
        <FixedElements scroll={pos} breakpoints={breakpoints} />
      <Routes>
        <Route path="/" element={
          <div className='mainpage'>
            <Develop />
            <Creative />
            <Marketing />
          </div>
          } />
        <Route path="*" element={
          <Plug />
        } />
      </Routes>
        </main>
    </BrowserRouter>
  );
}

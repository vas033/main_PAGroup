import FixedElements from './FixedElements/FixedElemets';
import './App.css';
import Plug from './Plug/Plug';
import Marketing from './Marketing/Marketing';
import Creative from './Creative/Creative';
import Develop from './Develop/Develop';
import { useEffect, useState } from 'react';

function App() {
  const [pos, setPos] = useState(0);

  const handleScroll = (e) => {
    const container = e.target;
    const scroll = container.scrollLeft;
    setPos(scroll);
  };

  const [blockId, setBlockId] = useState([{ id: 'develop', color: '#fff' }, { id: 'creative', color: '#3E24EA' }, { id: 'marketing', color: 'linear-gradient(90deg, #C84E89 0%, #F15F79 100%);' }]);
  const [breakpoints, setBreakpoints] = useState([]);

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
    <main id='mainpage' className='mainpage' onScroll={(e) => handleScroll(e)}>
      <FixedElements scroll={pos} breakpoints={breakpoints} />
      <Develop />
      <Creative />
      <Marketing />
      <Plug />
    </main>
  );
}

export default App;

import React from 'react';
import FixedElements from './FixedElements/FixedElemets';
import './App.css';
import Plug from './Plug/Plug';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstAnim from './FirstAnim/FirstAnim';
import Swiper from './Swiper/Swiper'


export default function App() {
  return (
    <BrowserRouter>
      <main id='mainpage'>
        <FirstAnim />
        <FixedElements />
        <Routes>
          <Route path="/" element={
            <Swiper />
          } />
          <Route path="*" element={<Plug />} />
        </Routes>
        </main>
    </BrowserRouter>
  );
}

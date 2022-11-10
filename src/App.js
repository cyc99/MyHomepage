import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App2 from "./App2";
import AnimationTest from './Animation';
import SimpleSlider from './slider';
import AboutPage from './About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="animate" element={<AnimationTest />} />
        <Route path="slide" element={<SimpleSlider /> } />
        <Route path="about" element={<AboutPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App2 from "./App2";
import AnimationTest from './Animation';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="animate" element={<AnimationTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

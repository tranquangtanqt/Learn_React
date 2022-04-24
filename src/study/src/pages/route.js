import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import HightLightCode from "./highlight";
import Home from "./homePage";
import './index.scss';

const RoutesRoot = () => {
  return (
    <BrowserRouter basename="/Learn_React">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlightcode" element={<HightLightCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;

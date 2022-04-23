import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import Home from "./homePage";
import './index.scss';

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import OracleTrick from "./database/oracle/trick";
import HightLightCode from "./highlight";
import Home from "./homePage";
import './index.scss';
import ListFileSelected from "./utilities/listFileSelected";
import TextLoop from "./utilities/textLoop";
import TinyMCE from "./utilities/tinyMCE";

const RoutesRoot = () => {
  return (
    <BrowserRouter basename="/Learn_React">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlightcode" element={<HightLightCode />} />
        <Route path="/utilities/tinyMCE" element={<TinyMCE />} />
        <Route path="/utilities/textLoop" element={<TextLoop />} />
        <Route path="/utilities/listFileSelected" element={<ListFileSelected />} />
        <Route path="/database/oracle" element={<OracleTrick />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;

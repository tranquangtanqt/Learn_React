import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import OracleTrick from "./database/oracle/trick";
import HightLightCode from "./highlight";
import Home from "./homePage";
import './index.scss';
import ListFileSelected from "./utilities/listFileSelected";
import RepeatText from "./utilities/repeatText";
import TinyMCE from "./utilities/tinyMCE";

const RoutesRoot = () => {
  return (
    <BrowserRouter basename="/Learn_React">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/highlightcode" element={<HightLightCode />} />
        <Route path="/utilities/tinyMCE" element={<TinyMCE />} />
        <Route path="/utilities/repeatText" element={<RepeatText />} />
        <Route path="/utilities/listFileSelected" element={<ListFileSelected />} />
        <Route path="/database/oracle" element={<OracleTrick />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;

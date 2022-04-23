import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./homePage/Index";
import './index.scss';

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;

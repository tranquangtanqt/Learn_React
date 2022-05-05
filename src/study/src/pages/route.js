import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OracleTrick from "./database/oracle/trick";
import HightLightCode from "./demo/highlight";
import Home from "./homePage";
import './index.scss';
import ListFileSelected from "./utilities/listFileSelected";
import RepeatText from "./utilities/repeatText";
import ReplaceText from "./utilities/replaceText";

import TinyMCE from "./utilities/tinyMCE";
import ConnectAPI from "./demo/connectAPI";
import NetAngular from "./netAngular";
import NALesson1 from "./netAngular/naLesson1";

const RoutesRoot = () => {
  return (
    <BrowserRouter basename="/Learn_React">
      <Routes>
        <Route path="/" element={<Home />} />
       
       

        <Route path="/demo/connectAPI" element={<ConnectAPI />} />
        <Route path="/demo/highlightcode" element={<HightLightCode />} />
        
        <Route path="/database/oracle" element={<OracleTrick />} />

        <Route path="/utilities/tinyMCE" element={<TinyMCE />} />
        <Route path="/utilities/repeatText" element={<RepeatText />} />
        <Route path="/utilities/listFileSelected" element={<ListFileSelected />} />
        <Route path="/utilities/replaceText" element={<ReplaceText />} />

        <Route path="/tutorial/net-angular" element={<NetAngular />} />
        <Route path="/tutorial/net-angular/lesson1" element={<NALesson1 />} />

        <Route path="/demo/connectAPI" element={<ConnectAPI />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;

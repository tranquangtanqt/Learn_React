import React from "react";
import Code from "../../../components/modules/code";

const code = `const App = props => {
    return (
      <div>
        <h1> React App </h1>
        <div>Awesome code</div>
      </div>
    );
  };
  `;

const HightLightCode = () => {
  return (
    <>
      <h1>HightLightCode</h1>
      <Code code={code} language="javascript" />
    </>
  );
};

export default HightLightCode;

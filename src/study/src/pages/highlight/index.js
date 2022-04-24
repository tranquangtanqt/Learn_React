import React from "react";
import Code from "../../components/modules/code";

import MasterLayout from "../../themes/masterLayout";

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
  return <MasterLayout>
       <h1>HightLightCode</h1>
       <Code code={code} language="javascript" />
  </MasterLayout>;
};

export default HightLightCode;
import React, { useEffect } from "react";
import Prism from "prismjs";
//import "prismjs/themes/prism-tomorrow.css";
//import "./styles.css";

import Editor from "react-prism-editor";

export default function Code({ code, language }) {
//   useEffect(() => {
//     setTimeout(() => {
//         Prism.highlightAll();
//     }, 0);
//   }, []);

//   return (
//     <div className="Code">
//       <pre>
//         <code className={`language-${language}`}>{code}</code>
//       </pre>
//     </div>
//   );
return (
    <Editor
      language={language}
      theme="okaidia"
      code={code}
      lineNumber={true}
      readOnly={true}
      clipboard={true}
      showLanguage={true}
      changeCode={(code) => {
        this.code = code;
        console.log(code);
      }}
    />
  );
}

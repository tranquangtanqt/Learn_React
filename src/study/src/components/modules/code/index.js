import React from "react";
import Editor from "react-prism-editor";

export default function Code({ code, language }) {
  return (
    <div>
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
        }}
      />
      <br />
    </div>
  );
}

/*
------ language of the code ------
language: json,javascript,jsx,tsx,typescript
html,vue,angular,css,sass,markup
java,php,csharp,c,cpp,sql,xml
*/

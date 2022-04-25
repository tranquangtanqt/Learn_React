import React from "react";
import Editor from "react-prism-editor";

export default function Code({ code, language }) {

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
      }}
    />
  );
}

import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

function TextCodeEditor({ language, code}) {
  /**
   * Generic CodeEditor:
   */

  return (
    <CodeEditor
      value={code}
      language={language}
      placeholder="Bitte Code eingeben!"
      style={{
        backgroundColor: "#ffffff", 
        color: "#000000", 
        border: "1px solid #ddd", 
        borderRadius: "10px", 
        fontFamily: "monospace",
        fontSize: 14,
      }}
    />
  );
}

export default TextCodeEditor;

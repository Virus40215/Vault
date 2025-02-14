import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

function TextCodeEditor({ language, code }) {
  /**
 * ! CodEditor
 * ! IMPORTANT!
 * ! This editor just shows the code.
 * 
 * @param language The programming language is specified to set the indentations and syntax highlighting.
 * @param code Code that is meant to be displayed.
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

import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

function TextCodeEditor({ language, initialCode, changedCode }) {
  /**
   * Generic CodeEditor:
   */
  const [code, setCode] = useState(initialCode);

  function handleChange(event) {
    const newCode = event.target.value;
    setCode(newCode);
    if (changedCode) {
      changedCode(newCode);
    }
  }

  return (
    <CodeEditor
      value={code}
      language={language}
      placeholder="Bitte Code eingeben!"
      onChange={handleChange}
      padding={15}
      style={{
        fontFamily:
          "ui-monospace, SFMono-Regular, SF Mono, Consolas, Liberation Mono, Menlo, monospace",
        fontSize: 12,
      }}
    />
  );
}

export default TextCodeEditor;

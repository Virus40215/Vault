import React, { useState } from "react";
import CodeEditor from "./code_editor";

function SnippetShowcaseWindow() {
  /**
   * Generic code showcase popup window:
   */
  return (
    <div className="bg-red-600">´
      Titel
      Language
      describtion

      <CodeEditor />
    </div>
  );
}

export default SnippetShowcaseWindow;

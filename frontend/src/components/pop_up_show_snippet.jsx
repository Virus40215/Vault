import React from "react";
import TextCodeEditor from "./ui_elements/code_editor";
import PopUpBase from "./bases/pop_up_base";

function PopUpShowSnippet({ dataObj, onClick }) {
  /**
   * Generic code showcase popup window:
   */

  return (
    <PopUpBase title={dataObj.title} onClick={onClick}>
      <TextCodeEditor language={dataObj.language} code={dataObj.code}/>
    </PopUpBase>
  );
}

export default PopUpShowSnippet;

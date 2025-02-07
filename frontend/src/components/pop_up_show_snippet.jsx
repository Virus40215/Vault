import React, { useState } from "react";
import TextCodeEditor from "./ui_elements/code_editor";
import PopUpBase from "./bases/pop_up_base";
import ButtonCopyToClipboard from "./ui_elements/button_copy_to_clipboard";
import ButtonSuccess from "./ui_elements/button_success";
import ButtonDelete from "./ui_elements/button_delete";
import { deleteItem } from "../apis/delete_item";

function PopUpShowSnippet({ dataObj, onClick, refreshSnippets }) {
  /**
   * Generic code showcase popup window:
   */
  const [copySuccess, setCopySuccess] = useState(false);

  function handleCopySuccess() {
    if (!copySuccess) {
      setCopySuccess(true);
      console.log("sfwsafs");
    }
  }
  //TODO: Add View for delete
  const handleDeleteSnippet = async (id) => {
    try {
      await deleteItem(dataObj.id);
      refreshSnippets();
      onClick();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <PopUpBase title={dataObj.title} onClick={onClick}>
      <div>
        <div>
          <h1 className="font-bold mb-2">Beschreibung:</h1>
          <p className="text-lg leading-relaxed max-w-2xl">
            {dataObj.language}
          </p>
        </div>
        <div>
          <h1 className="font-bold mb-2">Beschreibung:</h1>
          <p className="text-lg leading-relaxed max-w-2xl">
            {dataObj.description}
          </p>
        </div>
        <div>
          <h1 className="font-bold mb-2">Code:</h1>
          <TextCodeEditor language={dataObj.language} code={dataObj.code} />
        </div>
        <div className="flex justify-between gap-50 mt-4">
          {copySuccess ? (
            <ButtonSuccess buttonName="Kopieren" />
          ) : (
            <ButtonCopyToClipboard
              buttonName="Kopieren"
              text={dataObj.code}
              onBtnClick={handleCopySuccess}
            />
          )}
          <ButtonDelete buttonName="Löschen" onBtnClick={handleDeleteSnippet} />
        </div>
      </div>
    </PopUpBase>
  );
}

export default PopUpShowSnippet;

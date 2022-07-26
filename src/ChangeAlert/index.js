import React from "react";
import { useStorageListener } from "./useStorageListener";
import "../styles/components/dist/_ModalToDo.css";

function ChangeAlert({synchronize}) {
  const { show, toggleShow } = useStorageListener(synchronize); 

  if (show) {
    return (
      <aside className="Modal">
        <div className="flex">
          <p className="txt-center">
            You have changes
            <button onClick={() => toggleShow(false)}>
              Refresh
            </button>
          </p>
        </div>
      </aside>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };

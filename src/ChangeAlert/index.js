import React from "react";
import { withStorageListener } from "./withStorageListener";
import "../styles/components/dist/_ModalToDo.css";

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };

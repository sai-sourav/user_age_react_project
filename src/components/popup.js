import React from "react";
import ReactDOM from "react-dom";
import "./popup.css";

const Popup = (props) => {
  const ErrorPopup = (props) => {
    let content = "Please enter a valid Age (age > 0)";
    if (props.type === "invalidinput") {
      content = "Please enter valid Name or Age or College (non-empty-values)";
    }
    return (
      <div onClick={() => props.callbackfromApp()} className="popup-overlay">
        <div className="popup">
          <header className="popup-Header">
            <h2>Invalid input</h2>
          </header>
          <div className="popup-content">
            <p>{content}</p>
          </div>
          <footer className="popup-action">
            <button onClick={() => props.callbackfromApp()}>Ok</button>
          </footer>
        </div>
      </div>
    );
  };

  return ReactDOM.createPortal(
    <ErrorPopup callbackfromApp={props.callbackfromApp} type={props.type}/>,
    document.getElementById("overlay-root")
  );
};

export default Popup;

import React from "react";
import "./popup.css";

const Popup = (props) => {
  const ClosePopup = () => {
    props.callbackfromApp();
  };
  let content = "Please enter a valid Age (age > 0)"
  if(props.type === 'invalidinput'){
    content = "Please enter valid Name or Age(non-empty-values)"
  }
  return (
    <div className="popup-overlay">
      <div className="popup">
        <header className="popup-Header">
            <h2>Invalid input</h2>
        </header>
        <div className="popup-content">
          <p>{content}</p>
        </div>
        <footer className="popup-action">
          <button onClick={ClosePopup}>Ok</button>
        </footer>
      </div>
    </div>
  );
};

export default Popup;

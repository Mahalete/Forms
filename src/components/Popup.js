import React from "react";
import "../components/Popup.css";

const closeHandler = () => {
  window.location.reload();
};
const Popup = ({ firstName, lastName, phoneNumber, role, message, post }) => {
  return (
    <div className="overlay">
      <div className="popUpDiv">
        <h1>Preview your entry:</h1>
        <p>
          First name:<span>{firstName}</span>
        </p>
        <p>
          Last name:<span> {lastName}</span>
        </p>
        <p>
          Phone number:<span> {phoneNumber}</span>
        </p>
        <p>
          Role: <span>{role}</span>
        </p>
        <p>
          Message:<span> {message}</span>
        </p>
        <div className="buttons">
          <button onClick={post} className="primary">
            Yes, I am sure
          </button>
          <button className="secondary" onClick={closeHandler}>
            No, don't want to post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

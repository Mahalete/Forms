import React from "react";

const View = (props) => {
  return (
    <div>
      <div className="lines"></div>
      <div className="view_form">
        <h1>Check your</h1>
        <p>
          Firstname:
          {props.first}
        </p>
        <p>Lastname: {props.last}</p>
        <p>Phone: {props.phone}</p>
        <p>Role: {props.role}</p>
        <p>Message: {props.message}</p>
      </div>
    </div>
  );
};

export default View;

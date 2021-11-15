import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <div className="notepad">
        <p>
          Firstname: <span>{props.first}</span>
        </p>
        <p>
          Lastname: <span>{props.last}</span>
        </p>
        <p>
          Phone: <span>{props.phone}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;

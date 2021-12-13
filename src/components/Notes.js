import React from "react";

const Notes = ({ firstName, lastName, phoneNumber, role, message }) => {
  return (
    <div className="notes">
      <p>
        {firstName} {"  "}
        {lastName}
        {" - "}
        {role}
        {" | "}
        {phoneNumber}
        {" | "}
        {"  "}
        <strong>{message}</strong>
      </p>
      <p> </p>
      <p> </p>
    </div>
  );
};

export default Notes;

import React from "react";

const Form = ({ popUp, change }) => {
  return (
    <div className="form">
      <form onSubmit={popUp}>
        <label htmlFor="firstName" id="firstName">
          First name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={change}
          required
        />
        <label htmlFor="lastName" id="lastName">
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={change}
          required
        />
        <label htmlFor="PhoneNumber" id="PhoneNumber">
          Phone number
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="PhoneNumber"
          onChange={change}
          required
        />
        <label htmlFor="role" id="role">
          Role
        </label>
        <select name="role" id="role" onChange={change} required>
          <option value="" disabled></option>
          <option value="developer">Developer</option>
          <option value="teacher">Teacher</option>
          <option value="tester">Tester</option>
        </select>
        <label htmlFor="message" id="message">
          Message
        </label>
        <textarea name="message" id="message" onChange={change} required />
        <br></br>
        <input className="send_btn" type="submit" value="SEND"></input>
      </form>
    </div>
  );
};

export default Form;

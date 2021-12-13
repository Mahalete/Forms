import "../components/View.css";
const View = ({ firstName, lastName, PhoneNumber, role, message }) => {
  return (
    <div className="view">
      <div className="writing_pad">
        <p>
          First name:<span className=""> {firstName}</span>
        </p>
        <p>
          Last name:<span className="span"> {lastName}</span>
        </p>
        <p>
          Phone number:<span className="spanCanvea"> {PhoneNumber}</span>
        </p>
        <p>
          Role: <span className="spanCanvea">{role}</span>
        </p>
        <p>
          Message:<span className="spanCanvea"> {message}</span>
        </p>
      </div>
    </div>
  );
};

export default View;

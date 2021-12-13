// import React, { Component } from "react";
// import Form from "./components/Forms";
// import View from "./components/View";
// import Popup from "./components/Popup";
// import axios from "axios";

// class App extends Component {
//   state = {
//     inputData: {
//       firstname: "",
//       lastname: "",
//       phonenumber: "",
//       message: "",
//       role: "",
//     },
//     showPopup: false,
//     data: [],
//   };

//   inputHandler = (e) => {
//     this.setState({
//       //we need to collect allinput data here.
//       //opening the InputData with this state , when it fids the firstname then it gets the target data , and put the data in
//       inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
//     });
//   };

//   popupHandler = (event) => {
//     event.preventDefault();
//     this.setState({ showPopup: true });
//   };
//   postHandler = () => {
//     axios
//       .post("/http://localhost:3000/notes", this.state.inputData)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   O;
//   render() {
//     const props = {
//       first: this.state.firstname,
//       last: this.state.lastname,
//       phone: this.state.phonenumber,
//       role: this.state.role,
//       message: this.state.message,
//     };

//     return (
//       <div>
//         <Form change={this.inputHandler} submit={this.popupHandler} />
//         <View {...props} />
//         {this.state.showPopup && <Popup {...props} />}
//       </div>
//     );
//   }
// }

// export default App;
import "./App.css";
import React, { Component } from "react";
import Forms from "./components/Forms";
import View from "./components/View";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import axios from "axios";
class App extends Component {
  state = {
    inputData: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      message: "",
    },
    showPopup: false,
    data: [],
  };
  componentDidMount() {
    axios.get("http://localhost:3001/notes").then((res) => {
      this.setState({ data: res.data });
      console.log(res);
      console.log(res.data);
    });
  }
  textHandler = (event) => {
    this.setState({
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };
  clickHandler = (e) => {
    e.preventDefault();

    this.setState({
      showPopup: true,
    });
  };
  postHandler = () => {
    axios
      .post("http://localhost:3001/notes", this.state.inputData)
      .then((res) => {
        console.log(res);
        this.setState({ showPopup: false });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  style = {
    display: "none",
  };
  render() {
    return (
      <div>
        <Header />
        <div className="formArea">
          <Forms change={this.textHandler} popUp={this.clickHandler} />
          <View {...this.state.inputData} />
        </div>
        {this.state.showPopup && (
          <Popup {...this.state.inputData} post={this.postHandler} />
        )}
        {this.state.data.map((note) => (
          <Notes {...note} key={note.id} />
        ))}

        <Footer />
      </div>
    );
  }
}
export default App;

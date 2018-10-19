import React from "react";
import "../Styles/index.css";
import GenericForm from "../GenericForm";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3300/api/register", this.state)
      .then(response => {
        localStorage.setItem("jwt", response.data);
        this.props.history.push("/api/jokes");
      })
      .catch(error => console.log(error));
  };
}

export default SignUp;

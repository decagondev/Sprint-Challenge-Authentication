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
}

export default SignUp;

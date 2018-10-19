import React from "react";
import "../Styles/index.css";
import axios from "axios";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    const token = localStorage.getItem("jwt");
    const requestOptions = { headers: { authorization: token } };
    axios
      .get(`http://localhost:3300/api/jokes`, requestOptions)
      .then(response => this.setState({ jokes: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.jokes.map(joke => {
          return (
            <div key={joke.id}>
              {joke.setup} {joke.punchline}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Jokes;

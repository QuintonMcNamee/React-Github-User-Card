import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/QuintonMcNamee")
    .then(response => {
      return response.json();
    })
    .then(user => this.setState({ githubUser: user}))
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;

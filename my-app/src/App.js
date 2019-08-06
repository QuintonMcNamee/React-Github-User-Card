import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/QuintonMcNamee")
    .then(response => {
      return response.json();
    })
    .then(user => this.setState({ userData: user }))
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.userData} />
      </div>
    );
  }
}

export default App;

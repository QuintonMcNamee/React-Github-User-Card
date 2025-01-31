import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      userFollowers: [],
      userRepos: []

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

    fetch("https://api.github.com/users/QuintonMcNamee/followers")
    .then(response => {
      return response.json();
    })
    .then(user => this.setState({ userFollowers: user }))
    .catch(error => {
      console.log(error);
    });

    fetch("https://api.github.com/users/QuintonMcNamee/repos")
    .then(response => {
      return response.json();
    })
    .then(user => this.setState({ userRepos: user }))
    .catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="App">
        <UserCard userData={this.state.userData} userFollowers={this.state.userFollowers} userRepos={this.state.userRepos} />
      </div>
    );
  }
}

export default App;

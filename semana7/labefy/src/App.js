import React from 'react';
import './App.css';
import CreateRegistrationPage from './components/CreateRegistrationPage';
import SpoonRegistrationPage from './components/SpoonRegistrationPage';

class App extends React.Component {
  state = {
    userRegistration: "CreateRegistration",
  };

  anotherPage = () => {
    if (this.state.userRegistration === "CreateRegistration") {
      this.setState({ userRegistration: "SpoonRegistration" });
      console.log(this.state.userRegistration)
    } else {
      this.setState({ userRegistration: "CreateRegistration" });
      console.log(this.state.userRegistration)
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.anotherPage}>BIBLIOTECA</button>
        {this.state.userRegistration === "CreateRegistration" ? (
          <CreateRegistrationPage />
        ) : (
          <SpoonRegistrationPage />
        )}
      </div>
    );
  }
}

export default App;

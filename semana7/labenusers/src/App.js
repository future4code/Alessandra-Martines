import React from 'react';
import CreateRegistrationPage from './components/CreateRegistrationPage';
import SpoonRegistrationPage from './components/SpoonRegistrationPage';

class App extends React.Component {
  state = {
    userRegistration: "registered",
  };

  anotherPage = () => {
    if (this.state.mainPage === "CreateRegistration") {
      this.setState({ mainPage: "SpoonRegistration" });
    } else {
      this.setState({ mainPage: "CreateRegistration" });
    }
  };

  render() {
    return (
      <div>
        <button onclick={this.anotherPage}>MUDAR TELA</button>
        {this.state.mainPage === "CreateRegistration" ? (
          <CreateRegistrationPage />
        ) : (
          <SpoonRegistrationPage />
        )}
      </div>
    );
  }
}

export default App;

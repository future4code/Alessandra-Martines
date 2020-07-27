import React from 'react';
import './App.css';
import CreatePlaylistPage from './components/CreatePlaylistPage';
import ShowPlaylistPage from './components/ShowPlaylistPage';

class App extends React.Component {
  state = {
    userRegistration: "CreatePlaylist",
  };

  anotherPage = () => {
    if (this.state.userRegistration === "CreatePlaylist") {
      this.setState({ userRegistration: "ShowPlaylist" });
      console.log(this.state.userRegistration)
    } else {
      this.setState({ userRegistration: "CreatePlaylist" });
      console.log(this.state.userRegistration)
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.anotherPage}>BIBLIOTECA</button>
        {this.state.userRegistration === "CreatePlaylist" ? (
          <CreatePlaylistPage />
        ) : (
          <ShowPlaylistPage />
        )}
      </div>
    );
  }
}

export default App;

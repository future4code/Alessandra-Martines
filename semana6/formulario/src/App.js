import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final'
import './App.css';

class App extends React.Component {
  state = {
    id: 0,
    cliques: [<Etapa1/>, <Etapa2/>, <Etapa3/>, <Final/>],
  }
  cliquesEtapas = () => {
    this.setState({ id: this.state.id + 1})
  }

  render() {
    return (
      <>
        {this.state.cliques[this.state.id]}
        {this.state.id < 3 && <button onClick={this.cliquesEtapas}>Próxima etapa</button>}
      </>
    )
  }
}

export default App;

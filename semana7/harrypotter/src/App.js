import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  state = {
    characters: [
      {
        id: "",
        name: "",
        role: "",
        house: "",
        school: "",
        species: "",        
      },
    ],
    characterChoice: ""
  };

  componentDidMount = () => {
    this.onClickSeekCharacter ();
  }

  onClickSeekCharacter = (id) => {
    Axios
    .get('https://www.potterapi.com/v1/characters?key=$2a$10$0.T11pnNZffYOKQoNgtMP.3CJmXiGLBZHnBlx.guVYwAp2vBUAa4u')
    .then(response => {
      this.setState({ characters: response.data})
    })
    .catch(error => {
      alert('Algo deu errado Bruxo(a)');
    });
  }

  render () {
      return (
        <Container>
          <select>
            <option onClick={() => {this.onClickSeekCharacter(characters._id)}} value={characters.name}> {characters.name} </option>
          </select>
        </Container>
      )
    })
  };

export default App
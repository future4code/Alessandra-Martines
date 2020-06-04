import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    listPosts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/150',
      },

      {
        nomeUsuario: 'lekinhalessandra',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/151',
      },
      
      {
        nomeUsuario:'paullinhoramos',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/152',
      }
    ],
    valorInputNomeUsuario: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: ''
  };

  adicionarListPost = () => {
    const novaListPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    const novoUsuario = [...this.state.usuarios, novaListPost];
  };

  onChangeInputNomeUsuario = event => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }
  
  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {
    return (
      <div>
        <h3>Textos</h3>
        <div>
          <input value={this.state.valorInputNomeUsuario}
          onChange={this.onChangeInputNomeUsuario}
          placeholder={'Nome'}
          />

          <input value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={'Foto'}
          />

          <input value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={'Post'}
          />

          <button onClick={this.adicionaPessoa}>Adicionar</button>
        </div>
      </div>
    );
  }
   
  render() {
    return (
      <div className={'app-container'}>
      {this.state.listPosts.map((listPost) =>(
        <Post
        nomeUsuario={listPost.nomeUsuario}
        fotoUsuario={listPost.fotoUsuario}
        fotoPost={listPost.fotoPost}
        />
      )
      )}
      </div>
    )
  }
}

export default App;
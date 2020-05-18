import React from 'react';

class FormularioInscricao extends React.Component {
  state = {
    listaItens: [],

    valorInputNome: "",
    valorInputIdade: "", 
    valorInputEmail: "",
  };

  adicionarResposta = () => {
    const novaResposta = {
      id: Date.now(),
      nome: this.state.valorInputNome,
      idade: this.state.valorInputIdade,
      email: this.state.valorInputEmail,
    };
    const novoNome = [...this.state.listaItens, novaResposta];
  }

  onChangeInputNome = event => {
    this.setState({ valorInputNome: event.target.value })
  }
  
  onChangeInputIdade = event => {
    this.setState({ valorInputIdade: event.target.value })
  }

  onChangeInputEmail = event => {
    this.setState({ valorInputEmail: event.target.value })
  }

  render() {
    return (
      <div>
       
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <div>
        <p> Qual o seu nome? </p>
          <input value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={'Digite sua resposta'}
          />

        <p> Qual a sua idade? </p>
          <input value={this.state.valorInputIdade}
          onChange={this.onChangeInputIdade}
          placeholder={'Digite sua resposta'}
          />

        <p> Qual o seu e-mail? </p>
          <input value={this.state.valorInputEmail}
          onChange={this.onChangeInputEmail}
          placeholder={'Digite sua resposta'}
          />

          <button onClick={this.adicionaPessoadicionarResposta}>Próxima etapa</button>
          <div>{FormularioInscricao}</div>
        </div>
      </div>
    )
  }
}
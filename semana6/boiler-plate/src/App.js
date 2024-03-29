import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), 
          texto: '1ª tarefa',
          completa: false 
        },
        {
          id: Date.now(), 
          texto: '2ª tarefa',
          completa: true 
        },
      ],
      inputValue: '',
      filter: '',
    };

  componentDidUpdate() {
 
  }

  componentDidMount() {
    
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novasTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({tarefas: novasTarefas});
    this.setState.inputValue = '';
  }

  selectTarefa = (id) => {
    const novaArray = this.state.tarefas.map(tarefa => {
      if (tarefa.id === id) {
        const copiaDaTarefa = { ...tarefa };
        copiaDaTarefa.completa = !copiaDaTarefa.completa;
        return copiaDaTarefa;
      } else {
        return tarefa;
      }
    });

    this.setState({ tarefas: novaArray });
  };

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <div>
                <Tarefa
                  key={tarefa.id}
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto}
                </Tarefa>
              </div>
            );
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

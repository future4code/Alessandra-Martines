import React from 'react';
import styled from 'styled-components';

const Semanas = styled.div`
display: flex;
border: 1px solid black;
`

function Planner (){
    return(
        <div>
            <h1>PLANNER</h1>
            <div className="tarefas">
                <label>Nova tarefa: </label>
                <input type="text" placeholder="Adicionar tarefa"></input>
                <button >Adicionar</button>
            </div>
            
            <select className="Select">
                    <option value="Segunda">Segunda</option>
                    <option value="Terça">Terça</option>
                    <option value="Quarta">Quarta</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Sexta">Sexta</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
            </select>
            
            <div className="Semanas">
                <h3>SEGUNDA-FEIRA</h3>
                <h3>TERÇA-FEIRA</h3>
                <h3>QUARTA-FEIRA</h3>
                <h3>QUINTA-FEIRA</h3>
                <h3>SEXTA-FEIRA</h3>
                <h3>SÁBADO</h3>
                <h3>DOMINGO</h3>
            </div>
            
        </div>
    )
}

export default Planner;
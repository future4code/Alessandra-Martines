import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const Header = styled.div`
display: flex;
border: 1px solid black;
position: relative;
align-items: flex-end;
background-color: #5D9B9B;
`
const Main = styled.div`
display: flex;
border: 1px solid black;
justify-content: space-around;
background-color: #B1C27A;
height: 683px;
`
const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background-color: #F9EAC3;
height: 126px;
margin-top: -19px;
`
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-alessandra-bertelli"

const Planner = () => {
    const [ tasks, setTasks ] = useState([]);
    const [ inputText, setInputText ] = useState("");
    const [ day, setDay ] = useState("");

    const getTasks = async() => {
        try {
            const response = await Axios
            .get(`${baseUrl}`);
            setTasks(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTasks();
    }, []);

    const onChangeInput = (event) => {
        setInputText(event.target.value)
    }

    const onChangeSelect = (event) => {
        setDay(event.target.value)
    }

    const onClickNewTasks = async(event) => {
        event.preventDefault();

        const body = {
            text: inputText,
            day: day,
            completed: false,
        }

        await Axios
        .post (`${baseUrl}`, body)
        .then(() => {
            setInputText("");
            getTasks();
        })
    }

    const selectTasks = (id) => {
        const newList = tasks.map((tasks) => {
            if(tasks.id === id) {
                return {
                    ...tasks,
                    completed: !tasks.completed
                }
            }
            return tasks
        })
        setTasks(newList)
    }

    const deleteTasks = async(tasksId) => {
        if(window.confirm("Deseja apagar tarefa?")) {
            await Axios
            .delete(`${baseUrl}/${tasksId}`)
            .then(() => {
                getTasks();
            });
        }         
    }

    return(
        <div>
            <Header>
                <h1>PLANNER</h1>
                <label className="newTask">Nova tarefa: </label>

                <input 
                name="newTask"
                id="newTask"
                value={inputText}
                type="text" 
                onChange={onChangeInput} 
                placeholder="Adicionar tarefa"
                required
                />

                <select 
                name="select" 
                data-testid="select"
                onChange={onChangeSelect}
                value={day}
                required
                >
                        <option value="monday">Segunda</option>
                        <option value="tuesday">Terça</option>
                        <option value="wednesday">Quarta</option>
                        <option value="thursday">Quinta</option>
                        <option value="friday">Sexta</option>
                        <option value="saturday">Sábado</option>
                        <option value="sunday">Domingo</option>
                </select>
                <button onClick={onClickNewTasks}>Adicionar</button> 
            </Header>

            <Main>
                    <div id="monday" name="monday">
                        <h3>SEGUNDA-FEIRA</h3>
                        {tasks && tasks.map((tasks, index) => {
                            if(tasks.day === "monday") {
                                return(
                                    <ul>
                                        <tasks 
                                        completed={tasks.completed}
                                        onClick={() => selectTasks(tasks.id)}
                                        key={index}
                                        >
                                        {tasks.text}
                                        <button onClick={() => deleteTasks(tasks.id)}>DELETE</button>
                                        </tasks>
                                    </ul>
                                )
                            }else {
                                return null
                            }
                        })}
                    </div>

                    <div id="tuesday" name="tuesday">
                        <h3>TERÇA-FEIRA</h3>
                        {tasks && tasks.map((tasks, index) => {
                            if(tasks.day === "tuesday") {
                                return(
                                    <ul>
                                        <tasks 
                                        completed={tasks.completed}
                                        onClick={() => selectTasks(tasks.id)}
                                        key={index}
                                        >
                                        {tasks.text}
                                        <button onClick={() => deleteTasks(tasks.id)}>DELETE</button>
                                        </tasks>
                                    </ul>
                                )
                            }else {
                                return null
                            }
                        })}
                    </div>
                    <div id="wednesday" name="wednesday">
                        <h3>QUARTA-FEIRA</h3>
                        {tasks && tasks.map((tasks, index) => {
                            if(tasks.day === "wednesday") {
                                return(
                                    <ul>
                                        <tasks 
                                        completed={tasks.completed}
                                        onClick={() => selectTasks(tasks.id)}
                                        key={index}
                                        >
                                        {tasks.text}
                                        <button onClick={() => deleteTasks(tasks.id)}>DELETE</button>
                                        </tasks>
                                    </ul>
                                )
                            }else {
                                return null
                            }
                        })}
                    </div>
                    <div id="thursday" name="thursday">
                        <h3>QUINTA-FEIRA</h3>
                        {tasks && tasks.map((tasks, index) => {
                            if(tasks.day === "thursday") {
                                return(
                                    <ul>
                                        <tasks 
                                        completed={tasks.completed}
                                        onClick={() => selectTasks(tasks.id)}
                                        key={index}
                                        >
                                        {tasks.text}
                                        <button onClick={() => deleteTasks(tasks.id)}>DELETE</button>
                                        </tasks>
                                    </ul>
                                )
                            }else {
                                return null
                            }
                        })}
                    </div>
                    <div id="friday" name="friday">
                        <h3>SEXTA-FEIRA</h3>
                        {tasks && tasks.map((tasks, index) => {
                            if(tasks.day === "friday") {
                                return(
                                    <ul>
                                        <tasks 
                                        completed={tasks.completed}
                                        onClick={() => selectTasks(tasks.id)}
                                        key={index}
                                        >
                                        {tasks.text}
                                        <button onClick={() => deleteTasks(tasks.id)}>DELETE</button>
                                        </tasks>
                                    </ul>
                                )
                            }else {
                                return null
                            }
                        })}
                    </div>
                    <div id="saturday" name="saturday">
                        <h3>SÁBADO</h3>
                        {tasks && tasks.map((tasks, index) => {
                            if(tasks.day === "saturday") {
                                return(
                                    <ul>
                                        <tasks 
                                        completed={tasks.completed}
                                        onClick={() => selectTasks(tasks.id)}
                                        key={index}
                                        >
                                        {tasks.text}
                                        <button onClick={() => deleteTasks(tasks.id)}>DELETE</button>
                                        </tasks>
                                    </ul>
                                )
                            }else {
                                return null
                            }
                        })}
                    </div>
                    <div id="sunday" name="sunday">
                        <h3>DOMINGO</h3>
                        {tasks && tasks.map((tasks, index) => {
                            if(tasks.day === "sunday") {
                                return(
                                    <ul>
                                        <tasks 
                                        completed={tasks.completed}
                                        onClick={() => selectTasks(tasks.id)}
                                        key={index}
                                        >
                                        {tasks.text}
                                        <button onClick={() => deleteTasks(tasks.id)}>DELETE</button>
                                        </tasks>
                                    </ul>
                                )
                            }else {
                                return null
                            }
                        })}
                    </div>
                
            </Main>

            <Footer className="Anotações">
                <h3>"Com organização e tempo, acha-se o segredo de fazer tudo e bem feito." PITÁGORAS</h3>
            </Footer>
           
        </div>
    )
}

export default Planner;
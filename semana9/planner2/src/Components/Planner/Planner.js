import React from 'react';

function Planner() {
    return(
        <div>
            <p>Nova tarefa: </p> 
            <input id="meu-input" type="text" onchange="adicionarItem"> </input>
                <select name="dia-da-semana">
                    <option value="Segunda">Segunda</option>
                    <option value="Terça">Terça</option>
                    <option value="Quarta">Quarta</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Sexta">Sexta</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                </select>
        <button onclick="adicionarItem()">Adicionar</button>
    
            <div id="dia-da-semana" class="container">
                <ul class="s1">Segunda</ul>
                <ul class="s2">Terça</ul>
                <ul class="s3">Quarta</ul>
                <ul class="s4">Quinta</ul>
                <ul class="s5">Sexta</ul>
                <ul class="s6">Sábado</ul>
                <ul class="s7">Domingo</ul>
            </div>
        
            <footer> Sempre planeje seu dia escrevendo!</footer>
        </div>
    );
}

export default Planner;
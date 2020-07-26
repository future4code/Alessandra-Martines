import React from'react';

function NewRegister() {
    return(
        <div>
            <h2>NOVO CADASTRO</h2>
            <p>Nome de usuário:</p>
            <input type="text"></input>
            <p>E-mail:</p>
            <input type="email"></input>
            <p>Data de nascimento:</p>
            <input></input>
            <p>Senha:</p>
            <input type="password"></input>
            <button>CADASTRAR</button>
        </div>
    );
}

export default NewRegister;
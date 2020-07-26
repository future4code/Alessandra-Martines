import React, { useState } from'react';
import axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:alessandra-bertelli-mello/login";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleUpdateEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleUpdatePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = async() => {
        const loginBody = {
            email: email,
            password: password
        }
        try{
        const response = await axios.post(`${baseUrl}/login`.loginBody)

        window.localStorage.setItem("token".response.data.token);
        alert ("Login efetuado com sucesso!")
    } catch(err) {
        console.log(err);
        alert("Erro ao logar! Tente novamente...")
        }
    }

    return(
        <div>
            <h2>LOGIN</h2>
            <p>E-mail:</p>
            <input type="text" value={email} onChange={handleUpdateEmail}/>
            <p>Senha:</p>
            <input type="password" value={password} onChange={handleUpdatePassword}/>
            <button onClick={login}>LOGAR</button>
        </div>
    );
}

export default Login;
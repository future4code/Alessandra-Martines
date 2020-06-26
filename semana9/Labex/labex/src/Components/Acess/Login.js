import React, { useState, useEffect } from'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const baseURL = " ";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const ProtectedPage = () => {
        history.push("/privado");
    };

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if(token === null) {
            history.push("/privado");
        }
    }, [history]);

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
        const response = await axios.post(`${baseURL}/login`.loginBody)

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

            <button onClick={ProtectedPage}>Ir para Privado</button>
        </div>
    );
}

export default Login;
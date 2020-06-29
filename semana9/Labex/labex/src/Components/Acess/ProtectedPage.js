import React, { useEffect } from'react';
import { useHistory } from 'react-router-dom';

function ProtectedPage() { 
    const history = useHistory();
      
    const HomePage = () => {
      history.push("/");
    };
  
    const ProtectedPage = () => {
      history.push("/privado");
    };

    const TripPage = () => {
        history.push("/trips");
    };
    
    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token === null) {
            history.push("/")
        }
    }, [history])

    const Logout = () => {
        window.localStorage.clear();
        history.push("/");
    } 

return(
        <div>
            <p>É necessário logar primeiro!</p>
            <button onClick={() => HomePage}>Ir para HomePage</button>
            <button onClick={() => TripPage}>Ir para Viagens</button> 
            <button onClick={() => ProtectedPage}>Ir para Admin</button> 
            <button onClick={() => Logout}>LOGOUT</button>
        </div>
    );
}

export default ProtectedPage;

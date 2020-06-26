import React, { useEffect } from'react';
import { useHistory } from 'react-router-dom';

const ProtectedPage = () => {
    const history = useHistory();
      
    const HomePage = () => {
      history.push("/HomePage");
    };
  
    const Routers = () => {
      history.push("/admin");
    };

    const TripPage = () => {
        history.push("/viagens");
    };
    
    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token === null) {
            history.push('/HomePage')
        }
    }, [history])

    return(
        <div>
            <p>É necessário logar primeiro!</p>
            <button onClick={HomePage}>Ir para HomePage</button>
            <button onClick={TripPage}>Ir para Viagens</button>
            <button onClick={Routers}>Ir para Admin</button>
        </div>
    );
}

export default ProtectedPage;

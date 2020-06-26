import React from 'react';
import HeaderHome from '../Header/HeaderHome';
import Footer from '../Footer/Footer';

import { useHistory } from "react-router-dom";
import Login from '../Acess/Login';
import NewRegister from '../Acess/NewRegister';

const HomePage = () => {
    const history = useHistory();
      
    const TripPage = () => {
      history.push("/viagens");
    };
  
    const Routers = () => {
      history.push("/admin");
    };

    return (
        <div>
            <HeaderHome />
            <Login />
            <h1>OU</h1>
            <NewRegister />
            <button onClick={TripPage}>Ir para Viagens</button>
            <button onClick={Routers}>Ir para Admin</button>
            <Footer />
        </div>
    );
}

export default HomePage;
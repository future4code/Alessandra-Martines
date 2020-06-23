import React from 'react';
import HeaderTrips from '../Header/HeaderTrips';
import Footer from '../Footer/Footer';
import BuyTrips from './BuyTrips';
import TripRegistration from './TripRegistration';

import { useHistory } from "react-router";

const TripPage = () => {
    const history = useHistory();
  
    const HomePage = () => {
      history.replace("/");
    };

    return(
        <div>
            <HeaderTrips/>
            <button onClick={HomePage}>Ir para HomePage</button>
            <TripRegistration/>
            <BuyTrips/>
            <Footer/>
        </div>
    );
}

export default TripPage;
import React from 'react';
import HeaderTrips from '../Header/HeaderTrips';
import Footer from '../Footer/Footer';
import BuyTrips from './BuyTrips';
import TripRegistration from './TripRegistration.js';

function TripPage() {
    return(
        <div>
            <HeaderTrips/>
            <TripRegistration/>
            <BuyTrips/>
            <Footer/>
        </div>
    );
}

export default TripPage;
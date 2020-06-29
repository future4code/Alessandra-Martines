import React, { useEffect, useState } from 'react';
import HeaderTrips from '../Header/HeaderTrips';
import Footer from '../Footer/Footer';
import BuyTrips from './BuyTrips';
import TripRegistration from './TripRegistration';
import Axios from 'axios';
import styled from 'styled-components';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:alessandra-bertelli-mello/trips"

const TripsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 577px;
`
function TripPage() {
  const [trips, setTrips] = useState([])

  const getTrips = () => {
    Axios
    .get(baseUrl)
    .then((response => {
      setTrips(response.data.trips)
    }))
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getTrips()
  },[]) 

    return(
        <div>
            <HeaderTrips/>
            <TripsContainer>
            <TripRegistration>
              {trips.length === 0 ? (<p>Um minuto!</p>)
              :
              (trips.map(trip => <div>
                <p>{trip.name} - {trip.date} - {trip.planet} - {trip.durationInDays} </p>
                <p>{trip.description}</p>
        </div>))} 
            </TripRegistration>
            <BuyTrips/>
            </TripsContainer>
            <Footer/>
        </div>
    );
}

export default TripPage;
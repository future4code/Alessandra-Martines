import React, { useEffect, useState } from 'react';
import HeaderTrips from '../Header/HeaderTrips';
import Footer from '../Footer/Footer';
import BuyTrips from './BuyTrips';
import TripRegistration from './TripRegistration';

import Axios from 'axios';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:alessandra-bertelli-mello/trips"

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

  /* const goToTrip = (id) => {
    history.push(`/form/${id}`)
  }  */

    return(
        <div>
            <HeaderTrips/>
            <TripRegistration>
              {trips.length === 0 ? (<p>Um minuto!</p>)
              :
              (trips.map(trip => <div>
                <p>{trip.name} - {trip.date} - {trip.planet} - {trip.durationInDays} </p>
                <p>{trip.description}</p>
                {/* <button onClick={() => goToTrip(trip.id)}></button>  */}
        </div>))} 
            </TripRegistration>
            <BuyTrips/>
            <Footer/>
        </div>
    );
}

export default TripPage;
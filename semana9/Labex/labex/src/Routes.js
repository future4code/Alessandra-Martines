import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import TripPage from './Components/Trips/TripsPage';
import ProtectedPage from './Components/Acess/ProtectedPage';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/trips" exact component={TripPage}/>
                <Route path="/privado" exact component={ProtectedPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import TripPage from './Components/Trips/TripsPage';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/trips" exact component={TripPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

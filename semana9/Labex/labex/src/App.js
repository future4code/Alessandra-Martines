import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import TripsPage from './Components/Trips/TripsPage';

function App() {
  return (
    <div className="App"> 
    <HomePage />
    <TripsPage/>
    </div>
  );
}

export default App;

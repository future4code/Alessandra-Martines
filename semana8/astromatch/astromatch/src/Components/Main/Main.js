import React from 'react';
import AppBar from '../AppBar/AppBar';
import ChooseProfile from '../ChooseProfile/ChooseProfile';
import MatchList from '../MatchList/Matchlist';

function Main() {
    return (
        <div>
            <AppBar/>
            <ChooseProfile/>
            {/* <MatchList/> */}
        </div>
    );
}

export default Main;
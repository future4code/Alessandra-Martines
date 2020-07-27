import React from 'react';
import AppBar from '../AppBar/AppBar';
import ChooseProfile from '../ChooseProfile/ChooseProfile';
import MatchList from '../MatchList/Matchlist';
import styled from 'styled-components';

const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    width: 400px;
    height: 600px;
    margin: 100px;
`

function Main() {
    return (
        <MainContainer>
            <AppBar/>
            <ChooseProfile/>
            {/*<MatchList/>*/}
        </MainContainer>
    );
}

export default Main;
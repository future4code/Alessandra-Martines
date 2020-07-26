import React from 'react';
import HeaderHome from '../Header/HeaderHome';
import Footer from '../Footer/Footer';
import { useHistory } from 'react-router-dom';
import Login from '../Acess/Login';
import NewRegister from '../Acess/NewRegister';

import styled from 'styled-components';

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 554px;
`

function HomePage() {
  const history = useHistory();

  const onClickTripPage = () => {
    history.push("/trips");
  } 
      return (
        <div>
            <HeaderHome />
            <HomePageContainer>
              <Login />
              <h1>OU</h1>
              <NewRegister/>
            </HomePageContainer>
              <button onClick={onClickTripPage}>Ir para Viagens</button>
            <Footer />
        </div>
    );
}

export default HomePage;
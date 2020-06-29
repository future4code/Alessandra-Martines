import React from 'react';
import HeaderHome from '../Header/HeaderHome';
import Footer from '../Footer/Footer';

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
    
      return (
        <div>
            <HeaderHome />
            <HomePageContainer>
              <Login />
              <h1>OU</h1>
              <NewRegister/>
            </HomePageContainer>
              <button>Ir para Viagens</button>
            <Footer />
        </div>
    );
}

export default HomePage;
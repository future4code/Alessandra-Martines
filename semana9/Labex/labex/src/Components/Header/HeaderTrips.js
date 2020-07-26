import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #4682B4;
  height: 150px;
  border: 1px solid #708090; 
`

function HeaderTrips() {
    return(
        <div>
            <HeaderContainer>
            <img src={'https://freight.cargo.site/w/750/i/683a1684f4acc1847a0af8545c8773720129ab6a4749b0afdb261877b6be6ee4/logo_labex.png'} />
            <select>
                <option>MARTE</option>
                <option>JÚPITER</option>
                <option>SATURNO</option>
            </select>            
            </HeaderContainer>
        </div>
    );
}

export default HeaderTrips;
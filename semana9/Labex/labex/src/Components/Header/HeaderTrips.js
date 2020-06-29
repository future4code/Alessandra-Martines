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
            <img src={'https://picsum.photos/500/30'} />
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
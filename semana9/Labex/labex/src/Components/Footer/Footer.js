import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #B0C4DE;
  height: 150px;
  border: 1px solid #B0C4DE; 
  position: relative;
  bottom: 0;
  `

function Footer() {
    return(
        <div>
            <FooterContainer>
            <h3>Midias Sociais</h3>
            <h3>SAC</h3>
            </FooterContainer>
        </div>
    );
}

export default Footer;
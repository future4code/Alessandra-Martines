import React from 'react';
import styled from 'styled-components';

const ChooseButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px;
`

function ChooseButtons() {
    return (
        <ChooseButtonsContainer>
            <button>Dislike</button>
            <button>Like</button>
        </ChooseButtonsContainer>
    );
}

export default ChooseButtons;
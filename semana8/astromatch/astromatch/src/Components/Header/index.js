import React from 'react';

function Header(props) {
    return(
        <div>
            {props.currentPage === 'profile' ? <div></div> : <button onClick={props.onClickChangePage}>IR</button>}
            <p>LOGO</p>
            {props.currentPage === 'profile' ? <button onClick={props.onClickChangePage}>VIR</button> : <div></div>}
        </div>
    );
}

export default Header;
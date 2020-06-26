import React from 'react';

function HeaderTrips() {
    return(
        <div>
            <img src={'https://picsum.photos/500/30'} />
            <select>
                <option>MARTE</option>
                <option>JÚPITER</option>
                <option>SATURNO</option>
            </select>            
            <hr></hr>
        </div>
    );
}

export default HeaderTrips;
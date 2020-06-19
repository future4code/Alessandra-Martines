import React from 'react';

function Card ({card}) {
    const name = profile.name;
    const photo = profile.photo;
    const id = profile.id;

    return (
        <div>
            <img src={photo} alt={name} />
            {name}
        </div>
    );
}

export default Card;
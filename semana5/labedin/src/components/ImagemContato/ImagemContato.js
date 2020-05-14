import React from 'react';
import './ImagemContato.css'

function ImagemContato(props) {
    return (
        <div className="image-contato-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </div>

    )
}

export default ImagemContato;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

function BuyTrips() {
    const {id} = useParams()
    const token = window.localStorage.getItem('token')

    const [tripName, setTripName] = useState()
    const [applications, setApplications] = useState([])

    const getApplications = () => {
        const configurationAxios = {
            headers: {auth : token}
        }
        Axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-bertelli-mello/trip/${id}`, configurationAxios)
        .then(response => {
            setTripName(response.data.trip.name)
        }).catch(error => {
            console.log(error)
        })
    }    

    const buyTrip = (buy) => {
        const configurationAxios = {
            headers: {auth : token}
        }
        const body = {
            approve: true
        }
        Axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-bertelli-mello/trips/${id}/candidates/${buy}/decide/`, body, configurationAxios)
        .then(() => {
            alert("Viagem aceita!")
        }).catch(error => {
            console.log(error)
        })
    }

    const tripDenied = (denied) => {
        const configurationAxios = {
            headers: {auth : token}
        }
        const body = {
            approve: false
        }
        Axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alessandra-bertelli-mello/trips/${id}/candidates/${denied}/decide/`, body, configurationAxios)
        .then(() => {
            alert("Não temos mais vagas, tente em uma próxima!")
        }).catch(error => {
            console.log(error)
        })
    }
        
    return(
        <div>
            <h4>Detalhes da viagem selecionada:</h4>
            <img src={'https://picsum.photos/200'}/>

            <h5>MARTE</h5>
          
                <ol>Detalhe 1</ol>
                <ol>Detalhe 2</ol>
                <ol>Detalhe 3</ol>
                <ol>Detalhe 4</ol>
                <ol>Detalhe 5</ol>
         

            <button>COMPRAR</button>
        </div>
    );
}

export default BuyTrips;
import React, { useState } from 'react';
import Axios from 'axios';

const useForm = initialValues => {
    const [form, setForm] = useState(initialValues);  
    const onChange = (name, value) => {
        const newForm = {...form, [name] : value}
        setForm(newForm)
    }
    return {form, onChange}
}

function TripRegistration() {
    const {form, onChange} = useForm({name:"", planet:"", date:"", description:"", durationInDays:""})

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        onChange(name, value)
    }

    const createTrips = () => {
        const token = window.localStorage.getItem('token')
        const configurationAxios = {
            headers : {auth:token}
        }
        Axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:alessandra-bertelli-mello/trips", form, configurationAxios )
        .then(response => {
            console.log(response)
            console.log(form)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createTrips()
    }

    return(
        <div>
            <h4>CRIAR NOVO REGISTRO:</h4>
            <input onSubmit={handleSubmit}></input>
            <p>LOCAL:</p>
            <select 
                required
                name="planet"
                value={form.planet} 
                onChange={handleInputChange}>
                    <option
                        key=""
                        value="">
                    </option>
                    <option
                        key="Mercúrio"
                        value="Mercúrio">
                            Mercúrio
                    </option>
                    <option
                        key="Vênus"
                        value="Vênus">
                            Vênus
                    </option>
                    <option
                        key="Marte"
                        value="Marte">
                            Marte
                    </option>
                    <option
                        key="Júpiter"
                        value="Júpiter">
                            Júpiter
                    </option>
                    <option
                        key="Saturno"
                        value="Saturno">
                            Saturno
                    </option>
                    <option
                        key="Urano"
                        value="Urano">
                            Urano
                    </option>
                    <option
                        key="Netuno"
                        value="Netuno">
                            Netuno
                    </option>
            </select>
            <p>NOME DA VIAGEM:</p>
            <input 
                required
                name="name"
                value={form.name} 
                pattern="{5,}"
                onChange={handleInputChange}
            />
            <p>DATA PARTIDA:</p>
            <input
                required
                name="date"
                value={form.date} 
                type="date" 
                onChange={handleInputChange}
            />
            <p>DESCRIÇÃO:</p>
            <input
                required
                name="description"
                value={form.description} 
                pattern="{30,}"
                onChange={handleInputChange}
            />
            <p>DURAÇÃO:</p>
            <input
                name="durationInDays"
                value={form.durationInDays} 
                type="number" 
                min="50"
                onChange={handleInputChange}
            />
            <button>CRIAR</button>
        </div>
    );
}

export default TripRegistration;
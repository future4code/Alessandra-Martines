import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import ChooseButtons from './ChooseButtons';
import axios from 'axios';

function ChooseProfile() {
    const [profileToChoose, setProfileToChoose] = useState({
    })
    
      useEffect(() => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:alessandra-bertelli-mello/person")
        .then(response => {
        console.log(response.data.profile)
        setProfileToChoose(response.data.profile)
    })
    }, []);

    return (
        <div>
            <ProfileCard profile={profileToChoose}/>
            <ChooseButtons />
        </div>
    );
}

export default ChooseProfile;
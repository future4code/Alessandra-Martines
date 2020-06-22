import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [profile, setProfile] = useState({});
  const [currentPage, setCurrentPage] = useState('profile')

  const changePage = () => {
    currentPage === 'profile' ? setCurrentPage('list') : setCurrentPage('profile')
  }

  const getProfile = () => { 
  axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alessandra-bertelli-mello/person')
    .then(response => {
        setProfile(response.data.profile)
  })
    .catch(error => {
      console.log(error);
    });
  }
  
  useEffect(() => {
    getProfile()
  }, [])

  return (
   <MainContainer>
     <CardProfile>
       <Header onClickChangePage={() => changePage()} currentPage={currentPage}/>
     </CardProfile>
   </MainContainer>
);
};
  
export default App;

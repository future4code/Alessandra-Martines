import React from 'react';
import Axios from 'axios';
import styled from 'styled-component';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #eedeab;
width:100%;
height:80vh;
margin: 0;
padding:0;
font-family: Verdana;
font-size: 20px;
`


class CreatePlaylist extends React.Component {
    state = {
        namePlaylist: "",
        musicStyle: ""
    };
    
    onChangeNameValue = event => {
      const newName =  event.target.value;
      this.setState({ namePlaylist: newName });  
      console.log(newName)
    };
    
    onChangeMusicStyleValue = event => {
      const newStyle =  event.target.value;
      this.setState({ musicStyle: newStyle });  
      console.log(newStyle)
    };
    
    onClickCreateValue = () => {
      const axiosConfig = {
          headers: {
              Authorization: "alessandra-bertelli-mello"
          }
    };    

    const body = {
        namePlaylist: this.state.namePlaylist,
        musicStyle: this.state.musicStyle
    };
    
        Axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          body, 
          axiosConfig
        )
        .then(() => {
          alert(`Playlist ${this.state.namePlaylist} criada com sucesso!`);
        })
        .catch(error => {
          alert(`Sua playlist não foi criada, tente novamente!`)
          console.log(error);
        });        
    };
      
      render() {
        return (
            <Container>
              <div>
                <input placeholder={"Nome da playlist"} typed={"text"} value={this.state.namePlaylist} onChange={this.onChangeNameValue} />
                <input placeholder={"Estilo"} typed={"text"} value={this.state.musicStyle} onChange={this.onChangeMusicStyleValue}/>
                <button onClick={this.onClickCreateValue}>CRIAR PLAYLIST</button>
              </div>
            </Container>
        );
    }
}

export default CreatePlaylist;
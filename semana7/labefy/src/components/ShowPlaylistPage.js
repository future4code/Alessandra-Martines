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

const axiosConfig = {
    headers: {
        Authorization: "alessandra-bertelli-mello"
    }
};

class ShowPlaylist extends React.Component {
    state = {
        userList: []
    };

    componentDidMount = () => {
        this.ShowPlaylist();
      };

    ShowPlaylist = () => {
        Axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            axiosConfig
          )
          .then(response => {
            this.setState({ userList: response.data });
        });
      };

      deleteRegistration = userId => {
        Axios
          .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            axiosConfig
          )
          .then(() => {
              alert(`Playlist deletada!`)
            this.spoonRegistration();
          })
          .catch(error => {
            alert(`Não foi possível deletar a playlist ${userId}`);
          });
      };

    render() {
      return (
        <Container>
          <div>
            <ul>
              {this.state.userList.length === 0 && <div> PLAYLIST:</div>}
              {this.state.userList.map(user => {
                  return (
                      <li>
                        {user.namePlaylist}
                        <button onClick={() => this.deleteRegistration(user.id)}>
                            X
                        </button>
                      </li>  
                  );
                })}
            </ul>
            </div>
        </Container>
      );
    }
}

export default ShowPlaylist;
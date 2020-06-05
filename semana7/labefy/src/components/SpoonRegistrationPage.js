import React from 'react';
import Axios from 'axios';

const axiosConfig = {
    headers: {
        Authorization: "alessandra-bertelli-mello"
    }
};

class SpoonRegistration extends React.Component {
    state = {
        userList: []
    };

    componentDidMount = () => {
        this.spoonRegistration();
      };

    spoonRegistration = () => {
        Axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
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
              alert(`Usuário deletado!`)
            this.spoonRegistration();
          })
          .catch(error => {
            alert(`Não foi possível deletar o usuário!`);
          });
      };

    render() {
      return (
        <ul>
          {this.state.userList.length === 0 && <div> PLAYLIST:</div>}
          {this.state.userList.map(user => {
              return (
                  <li>
                    {user.name}
                    <button onClick={() => this.deleteRegistration(user.id)}>
                        X
                    </button>
                  </li>  
              );
            })}
        </ul>
      );
    }
}

export default SpoonRegistration;
import React from 'react';
import Axios from 'axios';

class CreateRegistration extends React.Component {
    state = {
        name: "",
        email: ""
    };
    
    onChangeNameValue = event => {
      const newName =  event.target.value;
      this.setState({ name: newName });  
    };
    
    onChangeEmailValue = event => {
      const newEmail =  event.target.value;
      this.setState({ email: newEmail });  
    };
    
    onClickCreateValue = event => {
      const axiosConfig = {
          headers: {
              Authorization: "alessandra-bertelli-mello"
          }
    };    

    const body = {
        name: this.state.name,
        email: this.state.email
    };
    
        Axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body, 
        axiosConfig
        )
        .then(() => {
          alert(`Sucesso na criação do usuário ${this.state.name}!`);
        })
        .catch(error => {
          alert(`Volte duas casas e tente novamente!`)
          console.log(error);
        });        
    };
      
      render() {
        return (
            <div>
              <input placeholder={"Digite seu nome"} typed={"text"} value={this.state.name} onChange={this.onChangeNameValue} />
              <input placeholder={"Digite seu e-mail"} typed={"text"} value={this.state.email} onChange={this.onChangeEmailValue}/>
              <button onClick={this.onClickCreateValue}>CADASTRAR</button>
            </div>
        );
    }
}

export default CreateRegistration;
import React from "react";

class PerguntaAberta extends React.Component {
    state = {
        valorInput: "",
    }

    onChangeInput = (event) => {
        this.props.setValue(event.target.value)
        this.setState({ valorInput: event.target.value });
    };

    render() {
        return (
            <div>
                <p>{this.props.pergunta}</p>
                <input type='text' value={this.state.valorInput} onChange={this.onChangeInput}  />
            </div>
        )
    }
}

export default PerguntaAberta;
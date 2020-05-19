import React from "react";

class PerguntaFechada extends React.Component {

    render() {
        let valor = 0;
        return (
            <div>
                <p>{this.props.pergunta}</p>
                <select onChange={this.onChangeSelect}>
                    {this.props.opcoes.map(opcao => {
                        valor++;
                        return <option key={valor} value={valor}>{opcao}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default PerguntaFechada;
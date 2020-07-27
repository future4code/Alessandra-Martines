import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";

class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <PerguntaAberta pergunta={"7. Por que você não terminou um curso de graduação?"} />
        <PerguntaAberta pergunta={"8. Você fez algum curso complementar?"} />
        <PerguntaFechada
          pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Nenhum",
            "Curso técnico",
            "Curso de inglês",
          ]}
        />
      </div>
    );
  }
}

export default Etapa3;
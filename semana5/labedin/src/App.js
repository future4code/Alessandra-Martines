import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import imagem from './imagem/Perfil.png';
import imagem2 from './imagem/MG.png';
import imagem3 from './imagem/base4.png';
import ImagemContato from './components/ImagemContato/ImagemContato'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagem}
          nome="Alessandra Bertelli Martines" 
          descricao="Me chamo Alessandra, mas sou conhecida como Leka. Produtora de Eventos, formada em Produção Cultural e Pós em Planejamento e Organização de Eventos. Atualmente, estudante apaixonada por programação!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <ImagemContato
        imagem="https://www.flaticon.com/br/premium-icon/icons/svg/2152/2152649.svg"
        texto="leka.produtora@gmail.com"
        />

        <ImagemContato
        imagem="https://image.flaticon.com/icons/svg/1275/1275192.svg"
        texto="Endereço não divulgado!"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={imagem2} 
          nome="Master Gold" 
          descricao="Gerente de Projetos, cuido de toda a logística de registro e distribuição digital dos fonogramas" 
        />
         <ImagemContato
        imagem="https://image.flaticon.com/icons/svg/1275/1275192.svg"
        texto="Endereço não divulgado!"
        />
        
        <CardGrande 
          imagem={imagem3} 
          nome="Base4Music" 
          descricao="Produtora e editora, cuidava de contratos e distribuição de bandas e pré produção do festival Encontro das Tribos"
        />
         <ImagemContato
        imagem="https://image.flaticon.com/icons/svg/1275/1275192.svg"
        texto="Endereço não divulgado!"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

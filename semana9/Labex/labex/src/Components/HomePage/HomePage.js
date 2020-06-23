import React from 'react';
import HeaderHome from '../Header/HeaderHome';
import Footer from '../Footer/Footer';

function HomePage() {
    return (
        <div>
            <HeaderHome />
            <p>LOGIN USUÁRIO</p>
            <h1>OU</h1>
            <p>NOVO CADASTRO</p>
            <Footer />
        </div>
    );
}

export default HomePage;
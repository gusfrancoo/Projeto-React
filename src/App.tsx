import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Home from "./components/pages/Home";
import Cadastro from "./components/pages/Cadastro";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/pages/Login';
import CriaProduto from './components/pages/CriaProduto';
import Perfil from './components/pages/Perfil';
import Footer from './components/layouts/Footer';


interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  return (
    <Container customClass = "min-height">
      {React.cloneElement (props.children)}
    </Container>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Efeito para verificar o status de login quando o app carregar
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Função para lidar com o login
  const handleLogin = (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log("loggout acionado");
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // Atualize o estado para refletir que o usuário não está mais logado
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path='/login' element={
        <Layout>
          <Login onLogin={handleLogin} onLogout={handleLogout}/>
        </Layout>
      }/>
        <Route path='/home' element = {
          <Layout>
            <Home />
          </Layout>
        }/>
        <Route path='/cadastro' element = {
          <Layout>
            <Cadastro />
          </Layout>
        }/>
        <Route path='/criaProduto' element = {
          <Layout>
            <CriaProduto />
          </Layout>
        }/>
        <Route path='/Perfil' element={
          <Layout>
           <Perfil onLogout={handleLogout} />
          </Layout>
        }/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
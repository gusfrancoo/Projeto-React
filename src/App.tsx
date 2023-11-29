import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Home from "./components/pages/Home";
import Cadastro from "./components/pages/Cadastro";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/pages/Login';
import CriaProduto from './components/pages/CriaProduto';
import Perfil from './components/pages/Perfil'


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
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        
        <Route path='/login' element = {
          <Layout>
            <Login />
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
        <Route path='/Perfil' element = {
          <Layout>
            <Perfil />
          </Layout>
        }/>

      </Routes>
    </Router>
  );
}

export default App;

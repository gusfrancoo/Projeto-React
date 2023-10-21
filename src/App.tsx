import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Home from "./components/pages/Home";
import Cadastro from "./components/pages/Cadastro";
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Route path='/' element = {
          <Layout>
            <Home />
          </Layout>
        }/>
        <Route path='/cadastro' element = {
          <Layout>
            <Cadastro />
          </Layout>
        }/>
      </Routes>
    </Router>
  );
}

export default App;

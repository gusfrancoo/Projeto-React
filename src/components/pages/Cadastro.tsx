import { useState, useEffect} from 'react';
import Row from "../layouts/Row";
import Usuario from '../../interfaces/Usuario.interface';
import { useNavigate } from 'react-router-dom';
import ItemForm from '../itens/ItemForm';
import styles from "./Cadastro.module.css";
import Container from '../layouts/Container';

function Cadastro(){
    const history = useNavigate();
    
    const createUser = async (usuario: Usuario) => {

        let existeUsuario = await verificaUsuario(usuario.email);

        if(existeUsuario){
            console.error("Usuario ja cadastrado");
            return;
        }
        
        const response = await fetch("http://localhost:8080/usuario", {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(usuario)
        });
        
        if(response.ok){
            console.log("Usuario criado com Sucesso.")
            history("/home");
            return;
        }
    }

    const verificaUsuario = async (usuario: Usuario) => {
        const checkUser = await fetch(`http://localhost:8080/usuario?email=${usuario}`, {
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            }
        })
        if(checkUser.ok){
            const data = await checkUser.json();
            if(data.length === 0){
                return false;
            }
            if(data[0].email === usuario){
                return true;
            }
        }

    }


    return(
        <Container customClass="cadContainer"> 
            <div className={`container-fluid ${styles.container}`}>
                    <ItemForm handleSubmit={createUser}
                        btnText="Enviar"
                        userData={{}}/>
            </div>
        </Container>
  


    )

}

export default Cadastro;
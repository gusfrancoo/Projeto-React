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

        // let existeUsuario = await verificaUsuario(usuario.username);

   
        const response = await fetch("http://localhost:8005/register", {
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
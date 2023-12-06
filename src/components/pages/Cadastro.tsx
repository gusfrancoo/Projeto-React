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
        try {
            const response = await fetch("http://localhost:8005/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });
            
            if (response.ok) {
                // Exibir SweetAlert de sucesso
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Usuário criado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                history("/home");
            } else {
                // Tratar resposta não-ok
                Swal.fire({
                    title: 'Erro!',
                    text: 'Falha ao criar usuário, tente novamente, usuário ja existe!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            // Tratar erro na requisição
            Swal.fire({
                title: 'Erro!',
                text: 'Erro ao realizar a requisição de cadastro.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
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
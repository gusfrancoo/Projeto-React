import styles from "./Login.module.css";
import Usuario from "../../interfaces/Usuario.interface";
import Container from "../layouts/Container";
import FormLogin from "../itens/FormLogin";
import LoginData from "../../interfaces/Login.interface";
import { useLocation, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'

function Login(){
    const location = useLocation();
    const redirect = useNavigate();
    const [msg, setMensagem] = useState("");
    // const [logado, setLogado] = useState(false);


    const getUser = async (login : LoginData) => {
        try {
            const user = await fetch(`http://localhost:8005/login/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(login)
            });
    
            if (user.ok) {
                const usuario = await user.json();
                if (usuario.token) {
                    // Exibir SweetAlert de sucesso
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Login realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    redirect('/home');
                } else {
                    // Exibir SweetAlert de erro
                    Swal.fire({
                        title: 'Erro!',
                        text: 'Não encontramos seu token de acesso.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                }
            } else {
                // Tratar resposta não-ok
                Swal.fire({
                    title: 'Erro!',
                    text: 'Falha no login, tente novamente.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            // Tratar erro na requisição
            Swal.fire({
                title: 'Erro!',
                text: 'Erro ao realizar a requisição de login.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }

    return(
        <Container customClass="cadContainer"> 
            <div className={`container-fluid ${styles.container}`}>
                    <FormLogin handleSubmit={getUser}
                        btnText="Enviar"
                        loginData={{}}/>
            </div>
        </Container>

    )
}

export default Login;
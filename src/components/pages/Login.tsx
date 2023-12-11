import styles from "./Login.module.css";
import Usuario from "../../interfaces/Usuario.interface";
import Container from "../layouts/Container";
import FormLogin from "../itens/FormLogin";
import LoginData from "../../interfaces/Login.interface";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Login() {
    const location = useLocation();
    const redirect = useNavigate();
    

    const getUser = async (login) => {
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
                    localStorage.setItem('token', usuario.token);
                    localStorage.setItem('username', login.username);
    
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Login realizado com sucesso!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
    
                    redirect('/home');

                    // Espera por 1 segundos antes de dar reload
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000); // 1000 milissegundos = 1 segundos
                } else {
                    Swal.fire({
                        title: 'Erro!',
                        text: 'Não encontramos seu token de acesso.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                }
            } else {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Falha no login, tente novamente.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Erro ao realizar a requisição de login.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    }
    return (
        <Container customClass="cadContainer">
            <div className={`container-fluid ${styles.container}`}>
                <FormLogin handleSubmit={getUser}
                    btnText="Entrar"
                    loginData={{}} />
            </div>
        </Container>
    )
}

export default Login;

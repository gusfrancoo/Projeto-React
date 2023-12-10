import React, { useState } from 'react';
import FormLoginProps from '../../interfaces/FormLogin';
import Swal from 'sweetalert2'; // Certifique-se de importar Swal
import styles from './FormLogin.module.css';
import Input from './Input';
import Row from '../layouts/Row';

function FormLogin({ handleSubmit, loginData, btnText, onLogin }: FormLoginProps) {
    const [login, setLogin] = useState(loginData || {});
    

    const submit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await handleSubmit(login); // Supondo que handleSubmit retorna a resposta da API
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('isLoggedIn', 'true'); // Salvar um indicador de login no Local Storage
                localStorage.setItem('token', data.token); // Suponha que 'data.token' é o token que você recebeu
                onLogin(data.token, login.username); // Atualiza o estado global em App.tsx
                Swal.fire({
                    title: "Login Realizado com sucesso!",
                    text: "Clique no botão para prosseguir!",
                    icon: "success"
                });
                // Aqui, você também pode redirecionar o usuário para outra página, se necessário
            } else {
                // Tratar casos de erro de login
                Swal.fire({
                    title: "Erro no Login",
                    text: "Credenciais inválidas!",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Erro no login', error);
        }
    };

    function handleChange(e: any) {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    

    return (
        <form className={`row g-3 ${styles.row}`} onSubmit={submit}>
            <h1>Login</h1>
            <Row>
                <Input 
                    type="text"
                    text="Email"
                    name="username"
                    placeholder="example@email.com"
                    handleOnChange={handleChange}
                    value={login.username}
                />
                <Input 
                    type="password" // Altere para 'password' para ocultar a senha
                    text="Senha"
                    name="password"
                    placeholder="Insira sua senha"
                    handleOnChange={handleChange}
                    value={login.password}
                />
                <button className={`btn col-sm-4 btn-primary ${styles.btn}`}>{btnText}</button>
            </Row>
        </form>
    );
}

export default FormLogin;

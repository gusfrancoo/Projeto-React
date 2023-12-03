import styles from "./Login.module.css";
import Usuario from "../../interfaces/Usuario.interface";
import Container from "../layouts/Container";
import FormLogin from "../itens/FormLogin";
import Login from "../../interfaces/Login.interface";
import { useLocation, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'

function Login(){
    const location = useLocation();
    const redirect = useNavigate();
    const [msg, setMensagem] = useState("");


    const getUser = async (login : Login) => {

        if(!login.password){
            alert("Insira a sua senha.");
            return;
        }

        const user = await fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            }
            body: JSON.stringify(login);
        })
        if(user.ok){
            const usuario = await user.json();
            // console.log(usuario)
            if(usuario[0].senha === login.password){
                console.log("sucesso");
                redirect('/home');

            } else {
                alert("As senhas não coincidem.")
            }

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
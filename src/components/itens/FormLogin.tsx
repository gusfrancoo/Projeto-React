import { useState, useEffect } from "react";
import FormLoginProps from "../../interfaces/FormLogin";
import Login from "../../interfaces/Login.interface";

import styles from "./FormLogin.module.css"
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Row from "../layouts/Row";



function FormLogin({handleSubmit, loginData, btnText}: FormLoginProps){

    const [login, setLogin] = useState(loginData || {})

    const submit = (val: any) => {
        val.preventDefault();
        handleSubmit(login);
        Swal.fire({
            title: "Login Realizado com sucesso!",
            text: "Clique no botão para prosseguir!",
            icon: "success"
          });
    }
        
    function handleChange (val: any){
        setLogin(
            {...login, 
                [val.target.name]: val.target.value}
        );
    }


    return (
        <form className={`row g-3 ${styles.row}`} onSubmit={submit}>
            <h1>
                Login
            </h1>
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
                    type="text"
                    text="Senha"
                    name="password"
                    placeholder="insira sua senha"
                    handleOnChange={handleChange}
                    value={login.password}
                    />

                    <button className={`btn col-sm-4 btn-primary ${styles.btn}`}>{btnText}</button>
            </Row>
            
        </form>
    )
}

export default FormLogin;
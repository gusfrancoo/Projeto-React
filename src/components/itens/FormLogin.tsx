import { useState, useEffect } from "react";
import FormLoginProps from "../../interfaces/FormLogin";
import styles from "./FormLogin.module.css"
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Row from "../layouts/Row";



function FormLogin({handleSubmit, loginData, btnText}: FormLoginProps){

    const [login, setLogin] = useState(loginData || {})

    const submit = (val: any) => {
        val.preventDefault();
        handleSubmit(login);
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
                    name="email"
                    placeholder="example@email.com"
                    handleOnChange={handleChange}
                    value={login.email}
                    />
                <Input 
                    type="text"
                    text="Senha"
                    name="senha"
                    placeholder="insira sua senha"
                    handleOnChange={handleChange}
                    value={login.senha}
                    />

                    <button className={`btn col-sm-4 btn-primary ${styles.btn}`}>{btnText}</button>
            </Row>
            
        </form>
    )
}

export default FormLogin;
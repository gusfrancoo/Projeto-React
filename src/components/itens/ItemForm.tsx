import { useState, useEffect } from "react";
import ItemFormProps from "../../interfaces/ItemFormProps";
import Usuario from "../../interfaces/Usuario.interface";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Row from "../layouts/Row";
import styles from "./ItemForm.module.css";


function ItemForm({handleSubmit, userData, btnText}: ItemFormProps){

    const [usuario, setUsuario] = useState(userData || {});

    const submit = (val: any) => {
        val.preventDefault();
        handleSubmit(usuario);
    };

    
    function handleChange (val: any){
        setUsuario(
            {...usuario, 
                [val.target.name]: val.target.value}
        );
    }


    return(
        
            <form className={`row g-3 ${styles.row}`} onSubmit={submit}>
                    <h1>
                        Cadastre-se
                    </h1>
                    <Input 
                        type="text"
                        text="Nome"
                        name="name"
                        placeholder="Insira seu Nome"
                        handleOnChange={handleChange}
                        value={usuario.name} />
                    <Input 
                        type="text"
                        text="Username"
                        name="username"
                        placeholder="username_example"
                        handleOnChange={handleChange}
                        value={usuario.username} />
                    <Input 
                        type="password"
                        text="Senha"
                        name="password"
                        placeholder="Insira sua senha"
                        handleOnChange={handleChange}
                        value={usuario.password } />
                    <Input 
                        type="text"
                        text="cpfCnpj"
                        name="cpfCnpj"
                        placeholder="insira seu cpf ou cnpj"
                        handleOnChange={handleChange}
                        value={usuario.cpfCnpj} />
                    <div>
                        <SubmitButton text={btnText} />
                    </div>
            </form>
    )

    
}

export default ItemForm;
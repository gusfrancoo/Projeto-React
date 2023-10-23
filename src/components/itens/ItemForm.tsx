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
                        value={usuario.nome} />
                    <Input 
                        type="text"
                        text="Email"
                        name="email"
                        placeholder="example@email.com"
                        handleOnChange={handleChange}
                        value={usuario.email} />
                    <Input 
                        type="password"
                        text="Senha"
                        name="senha"
                        placeholder="Insira sua senha"
                        handleOnChange={handleChange}
                        value={usuario.senha } />
                    <Input 
                        type="text"
                        text="Cidade"
                        name="cidade"
                        placeholder="insira sua cidade"
                        handleOnChange={handleChange}
                        value={usuario.cidade} />
                    <Input 
                        type="text"
                        text="UF"
                        name="uf"
                        placeholder="Insira UF da cidade"
                        handleOnChange={handleChange}
                        value={usuario.uf } />
                        
                    <div>
                        <SubmitButton text={btnText} />
                    </div>
            </form>
    )

    
}

export default ItemForm;
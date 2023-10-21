import { useState, useEffect } from "react";
import ItemFormProps from "../../interfaces/ItemFormProps";
import Usuario from "../../interfaces/Usuario.interface";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Row from "../layouts/Row";
import "./ItemForm.css";


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
            <form className="row g-3" onSubmit={submit}>
                    <h1>
                        Cadastre-se
                    </h1>
                    <Input 
                        type="text"
                        text="Nome"
                        name="name"
                        placeholder="Insira seu Nome"
                        handleOnChange={handleChange}
                        value={usuario.nome ? usuario.nome : ""} />
                    <Input 
                        type="text"
                        text="Email"
                        name="Email"
                        placeholder="example@email.com"
                        handleOnChange={handleChange}
                        value={usuario.email ? usuario.email : ""} />
                    <Input 
                        type="password"
                        text="Senha"
                        name="Senha"
                        placeholder="Insira sua senha"
                        handleOnChange={handleChange}
                        value={usuario.senha ? usuario.senha : ""} />
                    <Input 
                        type="text"
                        text="Cidade"
                        name="Cidade"
                        placeholder="insira sua cidade"
                        handleOnChange={handleChange}
                        value={usuario.cidade ? usuario.cidade : ""} />
                    <Input 
                        type="text"
                        text="UF"
                        name="UF"
                        placeholder="Insira UF da cidade"
                        handleOnChange={handleChange}
                        value={usuario.uf ? usuario.uf : ""} />
                        
                    <div>
                        <SubmitButton text={btnText} />
                    </div>
            </form>
    )

    
}

export default ItemForm;
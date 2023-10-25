import styles from "./FormCriaProduto.module.css"
import Input from "./Input";
import FormCriaProdutoProps from "../../interfaces/FormCriaProdutoProps.ts"
import Row from "../layouts/Row";
import { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton";



function FormCriaProduto ({handleSubmit, produtoData, btnText}: FormCriaProdutoProps){

    const [produto, setProduto] = useState(produtoData || {});

    const submit = async (val: any) => {
        val.preventDefault();
        handleSubmit(produto);
    }

    function handleChange (val: any){
        setProduto(
            {...produto, 
                [val.target.name]: val.target.value}
        );
        // console.log(produto);
    }


    return(

        <form className={`row g-3 ${styles.row}`} onSubmit={submit}>
                <h1>
                    Cadastrar Produto
                </h1>
                <Input 
                    type="text"
                    text="Nome"
                    name="name"
                    placeholder="Insira o nome do produto: "
                    handleOnChange={handleChange}
                    value={produto.name}
                    />
                <Input 
                    type="text"
                    text="Preço"
                    name="price"
                    placeholder="Insira o preço do produto: "
                    handleOnChange={handleChange}
                    value={produto.price}
                    />
                <Input 
                    type="text"
                    text="Tipo"
                    name="tipo"
                    placeholder="Insira o tipo do produto: "
                    handleOnChange={handleChange}
                    value={produto.tipo}
                    />
                <Input 
                    type="text"
                    text="Descrição"
                    name="descricao"
                    placeholder="Insira a descricao do produto: "
                    handleOnChange={handleChange}
                    value={produto.descricao}
                    />
                
                <Input 
                    type="text"
                    text="Src"
                    name="imageSrc"
                    placeholder="Caminho da imagem: "
                    handleOnChange={handleChange}
                    value={produto.imageSrc}
                    />
            
            <div>
                <SubmitButton text="Criar"/>
            </div>
            

        </form>
    )

}
export default FormCriaProduto;
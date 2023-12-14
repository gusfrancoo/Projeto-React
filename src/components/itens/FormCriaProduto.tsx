import styles from "./FormCriaProduto.module.css"
import Input from "./Input";
import FormCriaProdutoProps from "../../interfaces/FormCriaProdutoProps.ts"
import Row from "../layouts/Row";
import { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton";

function FormCriaProduto ({handleSubmit, produtoData, btnText}: FormCriaProdutoProps){

    const [produto, setProduto] = useState(produtoData || {});
    const [images, setImages] = useState([]);

    const submit = async (val: any) => {
        val.preventDefault();
        handleSubmit({...produto, images});
        Swal.fire({
            title: "Jogo Publicado!",
            text: "Clique no botão para prosseguir!",
            icon: "success"
          });
    }

    function handleChange (val: any){
        if (val.target.name === 'images') {
            const files = Array.from(val.target.files);
            setImages(files);
            
        } else {
            setProduto(
                {...produto, 
                    [val.target.name]: val.target.value}
            );
        }
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
                    maxLength={150}
                    />
                <Input 
                    type="text"
                    text="Preço"
                    name="price"
                    placeholder="Insira o preço do produto: "
                    handleOnChange={handleChange}
                    value={produto.price}
                    maxLength={150}
                    />
                {/* <Input 
                    type="text"
                    text="Tipo"
                    name="tipo"
                    placeholder="Insira o tipo do produto: "
                    handleOnChange={handleChange}
                    value={produto.tipo}
    /> */}
                <Input 
                    type="text"
                    text="Descrição"
                    name="descricao"
                    placeholder="Insira a descricao do produto: "
                    handleOnChange={handleChange}
                    value={produto.descricao}
                    maxLength={150}
                    />
                <Input 
                    type="text"
                    text="Imagem"
                    name="imageSrc"
                    placeholder="Insira o diretorio da imagem: "
                    handleOnChange={handleChange}
                    value={produto.imageSrc}
                    maxLength={150}
                    />
            
            <div>
                <SubmitButton text="Criar"/>
            </div>
        </form>
    )
}
export default FormCriaProduto;

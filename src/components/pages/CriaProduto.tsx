import FormCriaProduto from "../itens/FormCriaProduto";
import Container from '../layouts/Container';
import Produto from "../../interfaces/Produto.interface";
import styles from "./CriaProduto.module.css";
import {useNavigate} from 'react-router-dom';


    // Usar na pagina home após cadastrar um produto.
    // let mensagem = "";

    // if (location.state) {
    //     mensagem = location.state.mensagem;
    // }


function CriaProduto(){

    const redirect = useNavigate();

    const criaProduto = async (produto: Produto) => {
        const camposPreenchidos = verificaCampos(produto);

        if(camposPreenchidos){
            const response = await fetch("http://localhost:8005/produtos/", {   
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(produto)
            })
            .then((resp) => resp.json())
            .then((data) => {
                redirect("/home", {
                    state: {
                        mensagem: "Produto criado com sucesso!"
                    }
                })
            })
            .catch((erro) => console.error(erro));
        }

    }


    const verificaCampos =  (produto: any) => {
        for(const campo in produto){
            if(!produto[campo]){
                alert("Preencha todos os campos.")
                return false;
            }
        }
        return true;
    }

    return(

        <Container customClass="cadContainer">
            <div className={`container-fluid ${styles.container}`}>
                <FormCriaProduto handleSubmit={criaProduto} 
                    btnText="Criar"
                    produtoData={{}} />

            </div>
        </Container>

    )
}
export default CriaProduto;
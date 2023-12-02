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
        const ultimoId = await searchLastId();

        produto.id = ultimoId + 1;


        if(camposPreenchidos){
            const response = await fetch("http://localhost:8080/produtos", {   
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

    const searchLastId = async () =>{
        const response = await fetch("http://localhost:8080/produtos/", {
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            }
        });

        if(!response.ok){
            console.error("Erro ao buscar os dados")
            return;
        }

        const data = await response.json();

        let maxId = 0;

        for(const item of data){
            if(item.id > maxId){
                maxId = item.id;
            }
        }

        return maxId;

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
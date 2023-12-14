import Card from "../itens/Card";
import Produto from "../../interfaces/Produto.interface";
import { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// import styles from "./Home.module.css";
import Row from "../layouts/Row";
import "./Home.module.css"
import Mensagem from "../layouts/Mensagem";

function Home (){
    const location = useLocation();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const redirect = useNavigate();

    let mensagem = "";
    if (location.state) {
        mensagem = location.state.mensagem;
    }
    
    const novoProduto = () =>{
        redirect("/criaProduto");
    } 

    useEffect(()=>{
        fetch("http://localhost:8005/produtos/",{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=> response.json())
        .then((data) => {
            setProdutos(data);
            console.log(data);
            return
        })
        .catch((erro)=> console.log(erro));

    }, [])



    const groupedProducts = produtos ? produtos.reduce((acc, product, index) => {
        const groupIndex = Math.floor(index / 4); // Altere 4 para o número de itens por linha desejado
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(product);
        return acc;
    }, []) : [[]];

    return (
        <>
            {mensagem && <Mensagem msg={mensagem} type="sucesso" />}
                {groupedProducts.length > 0 &&
                groupedProducts.map((group, index) => (
                    <Row key={index}>
                        {group.map(produto => (
                            <Card key={produto.id} produto={produto}/>
                        ))}
                    </Row>
                ))}
                {groupedProducts.length === 0 &&
                    <p>Não há Produtos</p>
                }

            

        </>


    )
}
export default Home;
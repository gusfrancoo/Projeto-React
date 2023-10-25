import Card from "../itens/Card";
import Produto from "../../interfaces/Produto.interface";
import { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// import styles from "./Home.module.css";
import Row from "../layouts/Row";
import "./Home.module.css"

function Home (){
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const redirect = useNavigate();
    
    const novoProduto = () =>{
        redirect("/criaProduto");
    } 

    useEffect(()=>{
        fetch("http://localhost:8080/produtos",{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=> response.json())
        .then((data) => {
            console.log(data);
            setProdutos(data);
        })
        .catch((erro)=> console.log(erro));

    }, [])

    const groupedProducts = produtos ? produtos.reduce((acc: Produto[][], product: Produto) => {
        const lastGroup = acc[acc.length -1];

        if(lastGroup.length < 2){
            lastGroup.push(product)
        } else {
            acc.push([product]);
        }
        return acc;

    }, [[]]): [[]];

    return (
        <>
            {groupedProducts.length > 0 &&
            groupedProducts.map((group, index)=>(
                <Row key={index}>
                    {group.map((produto: Produto)=>(
                        <Card key={produto.id} produto={produto}/>
                    ))}
                </Row>
                
            ))}
            <button type="button" onClick={novoProduto} className="btn btn-dark">Novo Produto</button>
            {groupedProducts.length === 0 &&
                <p>Não há Produtos</p>
            }

        </>


    )
}
export default Home;
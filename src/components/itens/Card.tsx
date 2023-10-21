import Produto from '../../interfaces/Produto.interface';
import Row from '../layouts/Row';
import "./Card.css"
import "/img/hogwarts_legacy.jpg"

function Card ({produto}: {produto: Produto}){
    const remove = (e:any) =>{
        e.preventDefault();
        produto.handleRemove(produto.id);
    }

    return(
        <div className="card">
            <img src={produto.imageSrc} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{produto.name}</h5>
                <p className="card-text">{produto.descricao}</p>
                <h4>Valor: {produto.price}</h4>

            </div>
        </div>
    )
}

export default Card;
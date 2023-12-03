import Produto from '../../interfaces/Produto.interface';
import Row from '../layouts/Row';
import styles from "./Card.module.css"
import "/img/hogwarts_legacy.jpg"

function Card ({produto}: {produto: Produto}){
    const remove = (e:any) =>{
        e.preventDefault();
        produto.handleRemove(produto.id);
    }

    return(
        <div className={`card ${styles.card}`}>
            <img src={produto.imageSrc} className={`card-img-top ${styles.card_img_top}`} alt="" />
            <div className={`row ${styles.row}`}>
                <div className={`card-body ${styles.card_body}`}>
                    <h2 className={`card-title ${styles.card_title}`}>{produto.name}</h2>
                    <p className={`card-text ${styles.card_text}`}>{produto.descricao}</p>
                    <div className="price-button-container">
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 me-2">Valor: {produto.price}</h4>
                            <button className={`btn btn-success ${styles.buyButton}`}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;
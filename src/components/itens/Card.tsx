import Produto from '../../interfaces/Produto.interface';
import Row from '../layouts/Row';
import styles from "./Card.module.css"
import "/img/hogwarts_legacy.jpg"
import React, { useState } from 'react';

function Card ({produto}: {produto: Produto}){
    const [showModal, setShowModal] = useState(false);

    const remove = (e:any) =>{
        e.preventDefault();
        produto.handleRemove(produto.idProduto);
    }

    const handleBuy = (productId) => {
        // console.log(produto.idProduto);
        const id = produto.idProduto;
        fetch(`http://localhost:8005/comprar/${id}`,{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((response)=> response.json())
        .then((data) => {
            
        })
        .catch((erro)=> console.log(erro));

        setShowModal(true);
    };
    


    return(
    <>
        <div className={`card ${styles.card}`}>
            <img src={produto.imageSrc} className={`card-img-top ${styles.card_img_top}`} alt="" />
            <div className={`row ${styles.row}`}>
                <div className={`card-body ${styles.card_body}`}>
                    <h2 className={`card-title ${styles.card_title}`}>{produto.name}</h2>
                    <p className={`card-text ${styles.card_text}`}>{produto.descricao}</p>
                    <div className="price-button-container">
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 me-2">Valor: {produto.price}</h4>
                            <button className={`btn btn-success ${styles.buyButton}`} onClick={() => handleBuy(produto.idProduto)} >Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        {showModal && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className={`Modal title ${styles.labelText}`}>Finalizar Compra</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className={`modal-body ${styles.modal_body}`}>
                            <div>
                                
                                {/* Adicione campos para detalhes do cartão de crédito aqui */}
                            </div>
                                <form>
                                <p className={`paragraph ${styles.paragraph}`}>{produto.name}</p>
                                <p className={`paragraph ${styles.paragraph}`}>R${produto.price}</p>
                                
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="cardNumber" className={`form label ${styles.labelText}`}>Número do Cartão</label>
                                        <input type="text" className="form-control" id="cardNumber" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="cardExpiration" className={`form label ${styles.labelText}`}>Data de Validade</label>
                                        <input type="text" className="form-control" id="cardExpiration" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="cardCVC" className={`form label ${styles.labelText}`}>CVC</label>
                                        <input type="text" className="form-control" id="cardCVC" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="CPFCNPJ" className={`form label ${styles.labelText}`}>CPF/CNPJ</label>
                                        <input type="text" className="form-control" id="CPFCNPJ" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="email" className={`form label ${styles.labelText}`}>Email</label>
                                        <input type="text" className="form-control" id="email" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="cidade" className={`form label ${styles.labelText}`}>Cidade</label>
                                        <input type="text" className="form-control" id="cidade" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="logradouro" className={`form label ${styles.labelText}`}>Logradouro</label>
                                        <input type="text" className="form-control" id="logradouro" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="uf" className={`form label ${styles.labelText}`}>UF</label>
                                        <input type="text" className="form-control" id="uf" />
                                    </div>
                                    <div className={`mb-2 form label ${styles.label}`}>
                                        <label htmlFor="bairro" className={`form label ${styles.labelText}`}>Bairro</label>
                                        <input type="text" className="form-control" id="bairro" />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fechar</button>
                                <button type="button" className="btn btn-primary">Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </>
    );
}

export default Card;
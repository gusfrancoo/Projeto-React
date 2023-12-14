import React from 'react';
import { Jogo } from '../../interfaces/Jogo.interface';

const CardUser = ({ idProduto, name, descricao, imageSrc }) => {
    return (
        <div className="card">
            <img src={imageSrc} className="card-img-top" alt={`Imagem de ${name}`} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{descricao}</p>
            </div>
        </div>
    );
};

export default CardUser;
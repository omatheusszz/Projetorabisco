import React from 'react';

export default function CardProdutos(props) {
    return (
        <div className="card">
            <img src={`produtos/${props.nome}.png`} className="card-img-top" alt={props.nome} />
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text">{props.descricao}</p>
                <a href="#" className="btn btn-danger">R$ {props.preco}</a>
            </div>
            <div className="card-footer">
                <h5 className="card-text text-success text-center">
                    {props.quantidade} unidade(s) em estoque
                </h5>
            </div>
        </div>
    );
}

CardProdutos.defaultProps = {
    nome: 'Produto',
    descricao: 'Descrição do produto',
    quantidade: 0,
    preco: 0.00
};

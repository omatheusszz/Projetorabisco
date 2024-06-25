import CardProdutos from "./CardProdutos";

export default function CardList(props) {
  const { produtos } = props;
  return (
    <div className="container">
      <div className="row">
      
        {produtos.map((produto, index) => {
          return (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <CardProdutos
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                quantidade={produto.quantidade}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
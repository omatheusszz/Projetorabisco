import CardFunc from "./CardFunc";

export default function CardListFunc(props) {
  const { funcionarios } = props
  console.log(funcionarios)
  return (
    <div className="container my-3">
      <div className="row g-3">
        {funcionarios.map((funcionario, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <CardFunc
              first_name={funcionario.first_name}
              last_name={funcionario.last_name}
              email={funcionario.email}
              avatar={funcionario.avatar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

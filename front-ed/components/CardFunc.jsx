export default function CardFunc(props) {
  return (
    <div className="card">
      <img src={props.avatar} className="card-img-top p-2" alt="..." />
      <div className="card-body text-center">
        <h6 className="card-title">{props.first_name} {props.last_name}</h6>
        <a href={`mailto:${props.email}`} className="text-success">{props.email}</a>
      </div>
    </div>
  );
}
export default function Titulo(props) {
    return (
        <h1 className='display-5 text-success text-center mt-2'>
            {props.texto}
        </h1>
    )
}
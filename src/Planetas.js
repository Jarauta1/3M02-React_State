const Planetas = (props) => {
    return (
        <div>
        <h1>{props.nombre}</h1>
    <p>{props.temperatura}</p>
    <p>{props.color}</p>
    <img src={props.imagen} alt="" width="100"/>
      </div>
    )
}

export default Planetas;
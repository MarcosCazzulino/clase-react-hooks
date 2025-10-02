function Products({nombre, categoria, precio}){
    return (
        <div className="producto">
            <h3>{nombre}</h3>
            <h4>{categoria}</h4>
            <p>{precio}</p>
        </div>
    )
}

export default Products
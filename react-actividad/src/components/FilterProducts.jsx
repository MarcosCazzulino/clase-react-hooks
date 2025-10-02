import Products from "./Products";
import './ComponentesHook.css';
import React, {useState} from "react";

const productos = [
    { id: 1, nombre: 'Laptop', categoria: 'electronica', precio: 999 },
    { id: 2, nombre: 'Smartphone', categoria: 'electronica', precio: 599 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
    { id: 3, nombre: 'Camiseta', categoria: 'ropa', precio: 25 },
];

function FilterProducts(){
    const [filtro, setFiltro] = useState('')

    const Filtrar = (categoria) => {
        setFiltro(categoria)
    }

    return (
        <div className="section-productos">
            <h2>Productos</h2>
            <button onClick={Filtrar("todos")}>Todos</button>
            <button onClick={Filtrar("electronica")}>Electrónica</button>
            <button onClick={Filtrar("ropa")}>Ropa</button>
            <button onClick={Filtrar("libros")}>Libros</button>
            <ul className="lista-productos">
                {productos.map(producto => (
                    <li key={producto.id}>
                        <Products nombre={producto.nombre} categoria={producto.categoria} precio={producto.precio}/>
                    </li>
                ))}
            </ul>
            {if ()}
        </div>
    )
}

export default FilterProducts
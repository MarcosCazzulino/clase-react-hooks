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
    const [filtro, setFiltro] = useState('todos')

    const productosFiltrados = filtro === "todos" ? productos : productos.filter(p => p.categoria === filtro)

    return (
        <div className="section-productos">
            <h2>Productos</h2>
            <div>
                <button onClick={() => setFiltro('todos')}>Todos</button>
                <button onClick={() => setFiltro('electronica')}>Electrónica</button>
                <button onClick={() => setFiltro('ropa')}>Ropa</button>
                <button onClick={() => setFiltro('libros')}>Libros</button>
            </div>

            {filtro !== "todos" && (
                <p>Productos: {filtro}</p>
            )}

            {productosFiltrados.length === 0 ? (
                <p>No hay productos en esta categoría</p>
            ) : (
                <>
                    <p>Hay {productosFiltrados.length}{" "}
                        {productosFiltrados.length === 1 ? "producto" : "productos"} disponibles
                    </p>
                </>
            )}

            <ul className="lista-productos">
                {productosFiltrados.map(producto => (
                    <li key={producto.id}>
                        <Products nombre={producto.nombre} categoria={producto.categoria} precio={producto.precio}/>
                        {producto.precio > 500 && (
                            <span className="premium">Producto premium</span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterProducts
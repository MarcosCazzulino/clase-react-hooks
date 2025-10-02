import './GestionDeTarea.css'
import React, { useState } from 'react';
const tareasIniciales = [
{ id: 1, texto: 'Aprender React', estado: 'completada' },
{ id: 2, texto: 'Practicar hooks', estado: 'en progreso' },
{ id: 3, texto: 'Crear proyecto final', estado: 'pendiente' }
];

function GestiondeTareas() {
    const [tareas, setTareas] = useState(tareasIniciales);
    const pendientes = tareas.filter(tarea => tarea.estado= "pendiente").length
 

    return(
        <div>
            {pendientes == 0 ? <p>No hay tareas pendientes</p> : null}
            <h1> Lista de Tareas </h1>
            <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            {tarea.texto} {tarea.estado}
          </li>
        ))}
      </ul>

        </div>
    )
}

export default ListadeTareas.jsx
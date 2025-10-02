import './ComponentesHook.css'
import React, { useState } from 'react';

const tareas = [
    {id: 1, title: 'Hacer actividades de ITBA'},
    {id: 2, title: 'Ver el partido del Barcelona'},
    {id: 3, title: 'Ir a la facultad'}
]

function ToDoList(){
    const [tareaCompletada, setTarea] = useState(false)

    const completarTarea = () => {
        setTarea(!tareaCompletada)
    }
    const agregarTarea = () => {
        
    }
    const eliminarTarea = 
    
}
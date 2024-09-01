import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTareas, deleteTarea } from '../services/tareaService';

const TareasList = () => {
  const [tareas, setTareas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllTareas();
      setTareas(response.data);
    };
    fetchData();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/tareas/actualizar/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteTarea(id);
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div style={{ backgroundColor: '#E0F7FA', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: '#00796B', textAlign: 'center' }}>Lista de Tareas</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Nombre</th>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Descripción</th>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea) => (
            <tr key={tarea.id}>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>{tarea.nombre}</td>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>{tarea.descripcion}</td>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>
                <button 
                  onClick={() => handleUpdate(tarea.id)}
                  style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#0288D1', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                  Actualizar
                </button>
                <button 
                  onClick={() => handleDelete(tarea.id)}
                  style={{ padding: '5px 10px', backgroundColor: '#D32F2F', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TareasList;

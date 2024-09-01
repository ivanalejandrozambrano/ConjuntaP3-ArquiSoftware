import React, { useEffect, useState } from 'react';
import { getProyectos, deleteProyecto } from '../services/graphqlService'; // Asegúrate de tener deleteProyecto en graphqlService
import { useNavigate } from 'react-router-dom';

const ProyectosList = () => {
  const [proyectos, setProyectos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProyectos();
      setProyectos(response.data.listarProyectos);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProyecto(id); // Implementa deleteProyecto en graphqlService si no lo tienes
    setProyectos(proyectos.filter((proyecto) => proyecto.id !== id));
  };

  const handleUpdate = (id) => {
    navigate(`/proyectos/actualizar/${id}`);
  };

  return (
    <div style={{ backgroundColor: '#E0F7FA', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: '#00796B', textAlign: 'center' }}>Lista de Proyectos</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Nombre</th>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Descripción</th>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto) => (
            <tr key={proyecto.id}>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>{proyecto.nombre}</td>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>{proyecto.descripcion}</td>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>
                <button 
                  onClick={() => handleUpdate(proyecto.id)}
                  style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#0288D1', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                  Actualizar
                </button>
                <button 
                  onClick={() => handleDelete(proyecto.id)}
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

export default ProyectosList;

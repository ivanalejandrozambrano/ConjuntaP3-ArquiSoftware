import React, { useEffect, useState } from 'react';
import { getEmpleados, deleteEmpleado } from '../services/graphqlService'; // Asegúrate de tener deleteEmpleado en graphqlService
import { useNavigate } from 'react-router-dom';

const EmpleadosList = () => {
  const [empleados, setEmpleados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmpleados();
      setEmpleados(response.data.listarEmpleados);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmpleado(id); // Implementa deleteEmpleado en graphqlService si no lo tienes
    setEmpleados(empleados.filter((empleado) => empleado.id !== id));
  };

  const handleUpdate = (id) => {
    navigate(`/empleados/actualizar/${id}`);
  };

  return (
    <div style={{ backgroundColor: '#E0F7FA', padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: '#00796B', textAlign: 'center' }}>Lista de Empleados</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Nombre</th>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Email</th>
            <th style={{ border: '1px solid #00796B', padding: '8px', backgroundColor: '#B2DFDB' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>{empleado.nombre}</td>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>{empleado.email}</td>
              <td style={{ border: '1px solid #00796B', padding: '8px' }}>
                <button 
                  onClick={() => handleUpdate(empleado.id)}
                  style={{ marginRight: '10px', padding: '5px 10px', backgroundColor: '#0288D1', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                  Actualizar
                </button>
                <button 
                  onClick={() => handleDelete(empleado.id)}
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

export default EmpleadosList;

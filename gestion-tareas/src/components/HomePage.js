import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#E0F7FA', padding: '20px', borderRadius: '10px', textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ color: '#00796B', marginBottom: '40px' }}>Gestión de Recursos</h1>
      <button 
        onClick={() => navigate('/tareas')}
        style={{ padding: '15px 30px', marginBottom: '20px', backgroundColor: '#0288D1', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
      >
        Tareas
      </button>
      <button 
        onClick={() => navigate('/proyectos')}
        style={{ padding: '15px 30px', marginBottom: '20px', backgroundColor: '#0288D1', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
      >
        Proyectos
      </button>
      <button 
        onClick={() => navigate('/empleados')}
        style={{ padding: '15px 30px', backgroundColor: '#0288D1', color: 'white', border: 'none', borderRadius: '5px', fontSize: '18px' }}
      >
        Empleados
      </button>
    </div>
  );
}

export default HomePage;

import React, { useState, useEffect } from 'react';
import { useNavigate , useParams } from 'react-router-dom';
import { getTareaById, updateTarea } from '../services/tareaService';

const UpdateTarea = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [tarea, setTarea] = useState({ nombre: '', descripcion: '' });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTareaById(id);
      setTarea(response.data);
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    await updateTarea(id, tarea);
    history.push('/tareas');
  };

  return (
    <div>
      <h2>Actualizar Tarea</h2>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            value={tarea.nombre}
            onChange={(e) => setTarea({ ...tarea, nombre: e.target.value })}
          />
        </label>
        <br />
        <label>
          Descripción:
          <input
            type="text"
            value={tarea.descripcion}
            onChange={(e) =>
              setTarea({ ...tarea, descripcion: e.target.value })
            }
          />
        </label>
        <br />
        <button type="button" onClick={handleUpdate}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default UpdateTarea;

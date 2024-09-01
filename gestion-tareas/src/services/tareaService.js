import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tareas';

export const getAllTareas = async () => {
  return await axios.get(`${API_URL}/`);
};

export const createTarea = async (tarea) => {
  return await axios.post(`${API_URL}/`, tarea);
};

export const updateTarea = async (id, tarea) => {
  return await axios.put(`${API_URL}/${id}`, tarea);
};

export const getTareaById = async (id, tarea) => {
    return await axios.put(`${API_URL}/${id}`, tarea);
  };

export const deleteTarea = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

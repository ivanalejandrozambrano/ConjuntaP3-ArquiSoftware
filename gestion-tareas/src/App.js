import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TareasList from './components/TareasList';
import ProyectosList from './components/ProyectosList';
import EmpleadosList from './components/EmpleadosList';
import UpdateTarea from './components/UpdateTarea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tareas" element={<TareasList />} />
        <Route path="/proyectos" element={<ProyectosList />} />
        <Route path="/empleados" element={<EmpleadosList />} />
        <Route path="/tareas/actualizar/:id" element={<UpdateTarea />} />
      </Routes>
    </Router>
  );
}

export default App;

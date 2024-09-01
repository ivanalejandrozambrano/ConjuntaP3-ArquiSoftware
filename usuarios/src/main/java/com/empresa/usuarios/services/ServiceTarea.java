package com.empresa.usuarios.services;

import java.util.List;

import com.empresa.usuarios.models.Tarea;

public interface ServiceTarea {
	public Tarea saveTarea(Tarea tarea) throws Exception;
	
	public Tarea updateTarea(Tarea tarea) throws Exception;
	
	public List<Tarea> getAll();
	
	public Tarea getById(Long id);
	
	public void deleteTarea(Long id);
	
	

}

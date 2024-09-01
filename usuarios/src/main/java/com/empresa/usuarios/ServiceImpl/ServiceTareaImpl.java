package com.empresa.usuarios.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.empresa.usuarios.models.Tarea;
import com.empresa.usuarios.repository.RepositoryTarea;
import com.empresa.usuarios.services.ServiceTarea;

@Service
public class ServiceTareaImpl implements ServiceTarea{
	
	@Autowired
	private RepositoryTarea repositoryTarea;

	@Override
	public Tarea saveTarea(Tarea tarea) throws Exception {
		repositoryTarea.save(tarea);
		return tarea;
	}

	@Override
	public Tarea updateTarea(Tarea tarea) throws Exception {
		return repositoryTarea.save(tarea);
	}

	@Override
	public List<Tarea> getAll() {
		List<Tarea> tareas = repositoryTarea.findAll();
		return tareas;
	}

	@Override
	public Tarea getById(Long id) {
		return repositoryTarea.findById(id).orElse(null);
	}

	@Override
	public void deleteTarea(Long id) {
		repositoryTarea.deleteById(id);
		
	}

}

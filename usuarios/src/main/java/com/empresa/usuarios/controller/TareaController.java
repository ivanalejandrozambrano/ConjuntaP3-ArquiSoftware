package com.empresa.usuarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.empresa.usuarios.models.Tarea;
import com.empresa.usuarios.services.ServiceTarea;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tareas")
public class TareaController {
	
	@Autowired
	private ServiceTarea serviceTarea;
	
	@GetMapping("/")
	public List<Tarea> getAll(){
		return serviceTarea.getAll();
	}
	
	@PostMapping("/")
	public Tarea saveTarea (@RequestBody Tarea tarea) throws Exception{
		return serviceTarea.saveTarea(tarea);
			
	}
	
	@PutMapping("/{id}")
	public Tarea updateTarea(@PathVariable Long id, @RequestBody Tarea tarea) throws Exception {
		tarea.setId(id);
		return serviceTarea.updateTarea(tarea);
	}

	@GetMapping("/{id}")
	public Tarea getById(@PathVariable Long id) {
		return serviceTarea.getById(id);
	}

	@DeleteMapping("/{id}")
	public void deleteTarea(@PathVariable Long id) {
		serviceTarea.deleteTarea(id);
	}

}

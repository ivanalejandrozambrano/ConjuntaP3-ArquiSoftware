package com.empresa.usuarios.models;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "tarea")

public class Tarea {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nombre", nullable = true)
	private String nombre;
	
	@Column(name = "descripcion", nullable = true)
	private String descripcion;
	
	@Column(name = "proyecto_id", nullable = true)
	private Long proyecto_id;
	
	public Tarea() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Long getProyecto_id() {
		return proyecto_id;
	}

	public void setProyecto_id(Long proyecto_id) {
		this.proyecto_id = proyecto_id;
	}

	public Tarea(Long id, String nombre, String descripcion, Long proyecto_id) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.proyecto_id = proyecto_id;
	}
	
	
	
	
	

		

}

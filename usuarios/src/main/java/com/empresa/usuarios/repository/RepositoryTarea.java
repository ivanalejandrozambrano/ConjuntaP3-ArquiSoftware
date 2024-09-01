package com.empresa.usuarios.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.empresa.usuarios.models.Tarea;

public interface RepositoryTarea extends JpaRepository<Tarea, Long>{

}

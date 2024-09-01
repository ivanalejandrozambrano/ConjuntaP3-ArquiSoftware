package ec.edu.espe.graphql.repositories;

import ec.edu.espe.graphql.entities.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TareaRepository extends JpaRepository<Tarea, Long> {
}

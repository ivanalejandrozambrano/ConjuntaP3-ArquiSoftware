package ec.edu.espe.graphql.repositories;

import ec.edu.espe.graphql.entities.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProyectoRepository  extends JpaRepository<Proyecto, Long> {
}

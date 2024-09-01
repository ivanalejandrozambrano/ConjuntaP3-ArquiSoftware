package ec.edu.espe.graphql.repositories;

import ec.edu.espe.graphql.entities.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
}

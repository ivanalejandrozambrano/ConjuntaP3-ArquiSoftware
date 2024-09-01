package ec.edu.espe.graphql;

import ec.edu.espe.graphql.entities.*;
import ec.edu.espe.graphql.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@SpringBootApplication
public class GraphqlApplication {
    Random random = new Random();

    public static void main(String[] args) {
        SpringApplication.run(GraphqlApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(CategoriaRepository categoriaRepository, ProductoRepository productoRepository, EmpleadoRepository empleadoRepository, ProyectoRepository proyectoRepository, TareaRepository tareaRepository) {
        return args -> {
            List.of("Computadoras", "Impresoras", "Celulares").forEach(cat -> {
                Categoria categoria = Categoria.builder().name(cat).build();
                categoriaRepository.save(categoria);
            });

            categoriaRepository.findAll().forEach(categoria -> {
                System.out.println(categoria.getName());
                for (int i = 0; i < 10; i++) {
                    Producto producto = Producto.builder()
                            .nombre(categoria.getName() + " " + i)
                            .precio(100 + Math.random() * 1000)
                            .stock(random.nextInt())
                            .categoria(categoria)
                            .build();
                    productoRepository.save(producto);
                }
            });

            List.of("Juan Pérez", "María García", "Carlos Gómez").forEach(emp -> {
                Empleado empleado = Empleado.builder().nombre(emp).email(emp.toLowerCase().replace(" ", ".") + "@example.com").build();
                empleadoRepository.save(empleado);
            });

            // Creación de Proyectos y Tareas
            List.of("Proyecto Alpha", "Proyecto Beta", "Proyecto Gamma").forEach(projName -> {
                Proyecto proyecto = Proyecto.builder().nombre(projName).descripcion("Descripción de " + projName).build();
                proyectoRepository.save(proyecto);

                proyectoRepository.findAll().forEach(proyectoSaved -> {
                    for (int i = 0; i < 5; i++) {
                        Tarea tarea = Tarea.builder()
                                .nombre(proyectoSaved.getNombre() + " - Tarea " + (i + 1))
                                .descripcion("Descripción de la tarea " + (i + 1))
                                .proyecto(proyectoSaved)
                                .empleados(empleadoRepository.findAll()) // Asignar todos los empleados a cada tarea
                                .build();
                        tareaRepository.save(tarea);
                    }
                });
            });



        };
    }
}

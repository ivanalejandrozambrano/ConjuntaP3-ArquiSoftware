package ec.edu.espe.graphql.controller;

import ec.edu.espe.graphql.dto.ProductoRequest;
import ec.edu.espe.graphql.entities.Categoria;
import ec.edu.espe.graphql.entities.Empleado;
import ec.edu.espe.graphql.entities.Producto;
import ec.edu.espe.graphql.entities.Proyecto;
import ec.edu.espe.graphql.repositories.CategoriaRepository;
import ec.edu.espe.graphql.repositories.EmpleadoRepository;
import ec.edu.espe.graphql.repositories.ProductoRepository;
import ec.edu.espe.graphql.repositories.ProyectoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class ProductoGraphQLController {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private ProyectoRepository proyectoRepository;

    @Autowired
    private EmpleadoRepository empleadoRepository;

    @CrossOrigin(origins = "http://localhost:3001")
    @QueryMapping
    public List<Producto> listarProductos() {
        return productoRepository.findAll();
    }

    @QueryMapping
    public Producto listarProductoPorId(@Argument Long id) {
        return productoRepository.findById(id).orElse(null);
    }

    @QueryMapping
    public List<Categoria> listarCategorias() {
        return categoriaRepository.findAll();
    }

    @QueryMapping
    public Categoria listarCategoriaPorId(@Argument Long id) {
        return categoriaRepository.findById(id).orElseThrow(
                () -> new RuntimeException(String.format("Categoria %s no encontrada", id))
        );
    }

    @QueryMapping
    public List<Proyecto> listarProyectos() {
        return proyectoRepository.findAll();
    }

    @QueryMapping
    public Proyecto listarProyectoPorId(@Argument Long id) {
        return proyectoRepository.findById(id).orElse(null);
    }

    @QueryMapping
    public List<Empleado> listarEmpleados() {
        return empleadoRepository.findAll();
    }

    @QueryMapping
    public Empleado listarEmpleadoPorId(@Argument Long id) {
        return empleadoRepository.findById(id).orElse(null);
    }








    @MutationMapping
    public Producto guardarProducto(@Argument ProductoRequest productoRequest) {
        Categoria categoria = categoriaRepository.findById(productoRequest.categoriaId()).orElse(null);
        Producto productoBBDD = new Producto();
        productoBBDD.setNombre(productoRequest.nombre());
        productoBBDD.setPrecio(productoRequest.precio());
        productoBBDD.setStock(productoRequest.stock());
        productoBBDD.setCategoria(categoria);
        return productoRepository.save(productoBBDD);
    }

    @MutationMapping
    public Producto actualizarProducto(@Argument int id, @Argument ProductoRequest productoRequest) {
        Categoria categoria = categoriaRepository.findById(productoRequest.categoriaId()).orElse(null);
        Producto productoBBDD = productoRepository.findById((long) id).orElseThrow(
                () -> new RuntimeException(String.format("producto %s no encontrada", id))
        );
        productoBBDD.setNombre(productoRequest.nombre());
        productoBBDD.setPrecio(productoRequest.precio());
        productoBBDD.setStock(productoRequest.stock());
        productoBBDD.setCategoria(categoria);
        return productoRepository.save(productoBBDD);
    }

    @MutationMapping
    public void eliminarProducto(@Argument Long id) {
        productoRepository.deleteById(id);
    }

}

# ConjuntaP3-ArquiSoftware
Este repositorio contiene tres proyectos que juntos forman una aplicación completa para la gestión de tareas, proyectos y empleados.

## Estructura del Proyecto
- `api-rest-tareas/`: API REST para la gestión de tareas.
- `graphql-proyectos/`: API GraphQL para la gestión de proyectos.
- `frontend/`: Interfaz de usuario en React.

## Requisitos Previos
- Node.js y npm
- Java 21 y Maven
- PostgreSQL

## Instrucciones de Inicialización

### 1. Inicializar el Backend
- API GraphQL Proyectos:
  ```bash
  cd graphql-proyectos
  mvn clean install
  mvn spring-boot:run
  ```

#### Verificación de Postman
![Página postman GraphQL](./imagenes/Screenshot%202024-08-31%20231552.png)


- API REST Tareas:
  ```bash
  cd api-rest-tareas
  mvn clean install
  mvn spring-boot:run
  ```
![Página postman API REST](./imagenes/Screenshot%2024-08-31%232627.png)


### 2. Inicializar el Frontend
```bash
cd frontend
npm install
npm start
```

## Capturas de Pantalla
### Página Principal
![Página Principal](./imagenes/Screenshot%202024-08-31%20231552.png)

### Página de Tareas
![Lista de Tareas](./imagenes/Screenshot%2024-08-31%231330.png)

### Página de Proyectos
![Lista de Proyectos](./imagenes/Screenshot%2024-08-31%231019.png)

### Página de Empleados
![Lista de Empleados](./imagenes/Screenshot%202024-08-31%20231019.png)


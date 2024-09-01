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
- API REST Tareas:
  ```bash
  cd api-rest-tareas
  mvn clean install
  mvn spring-boot:run
  ```
- API GraphQL Proyectos:
  ```bash
  cd graphql-proyectos
  mvn clean install
  mvn spring-boot:run
  ```

### 2. Inicializar el Frontend
```bash
cd frontend
npm install
npm start

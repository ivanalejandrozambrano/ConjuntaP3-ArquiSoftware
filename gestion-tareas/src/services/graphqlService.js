// src/services/graphqlService.js

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

export const getEmpleados = async () => {
  return client.query({
    query: gql`
      query {
        listarEmpleados {
          id
          nombre
          email
        }
      }
    `,
  });
};

export const getProyectos = async () => {
  return client.query({
    query: gql`
      query {
        listarProyectos {
          id
          nombre
          descripcion
        }
      }
    `,
  });
};

export const deleteProyecto = async (id) => {
  return client.mutate({
    mutation: gql`
      mutation {
        eliminarProyecto(id: ${id})
      }
    `,
  });
};

export const deleteEmpleado = async (id) => {
  return client.mutate({
    mutation: gql`
      mutation {
        eliminarEmpleado(id: ${id})
      }
    `,
  });
};

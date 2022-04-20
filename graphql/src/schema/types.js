import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }
`;

export default typeDefs;

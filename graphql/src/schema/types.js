import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    hello(name: String): String!
    posts(limit: Int): [Post!]!
    users(limit: Int): [User!]!
  }

  type Mutation {
    addNewUser(data: AddUserInput!): User!
  }

  type Post {
    id: String!
    title: String!
    slug: String!
    text: String!
    user: User!
  }

  type User {
    id: String!
    handle: String!
    url: String
    firstName: String!
    lastName: String!
  }

  input AddUserInput {
    handle: String!
    url: String
    firstName: String
    lastName: String
  }
`;

export default typeDefs;

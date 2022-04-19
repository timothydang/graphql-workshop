import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    hello(name: String): String!
    posts(limit: Int, page: Int): [Post!]!
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
`;

export default typeDefs;

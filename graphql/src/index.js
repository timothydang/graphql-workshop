import { createServer } from '@graphql-yoga/node'
import { makeExecutableSchema } from '@graphql-tools/schema'

import typeDefs from './schema/types'
import resolvers from './schema/resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

// Create your server
const server = createServer({
  schema,
  port: 8100
})

// start the server and explore http://localhost:8100/graphql
server.start(() => console.log('Server is running on http://localhost:8100/graphql'))

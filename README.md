# GraphQL workshop

## Introduction

The goal of the workshop is to create your own GraphQL-server that acts as a gateway on top of a few REST-services.

In this workshop we will be covering:

- Creating a Hello World GraphQL-app
- Proxying requests from existing REST-service
- Tying different data types in your REST-service together in a graph


## Getting started

```sh
npm i
npm run dev
```

### URLs

- http://localhost:8100 - GraphQL-server
- http://localhost:8101 - the existingg REST-server

### Test query

Start by opening http://localhost:8100 (after `npm run dev`) to see your GraphQL playground and get familiar with the project.

Try this query:

```graphql
{
  hello(name: "Harry")
}
```

### Understand the existing Posts and Users data

http://localhost:8101/posts?_limit=10
http://localhost:8101/users

## Tasks

- Implement a Post resolver so we can query for our list of Posts
- Implement a User resolver so we can query for all users.
- Add `limit` and `page` for pagination to our Posts and Users query
- Add Ability to add posts / comments with muutations

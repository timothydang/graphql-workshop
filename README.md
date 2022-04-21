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

- Posts - [http://localhost:8101/posts?_limit=10](http://localhost:8101/posts?_limit=10)
- Users - [http://localhost:8101/users](http://localhost:8101/users)

## Tasks

1. Implement a Post resolver so we can query for our list of Posts.
2. Implement a User resolver so we can query for all users.
3. Implement User resolver inside Post to retrieve firstName and lastName.
4. Add `limit` parameter to our Posts and Users query.
5. Add Ability to add users, posts using mutations.

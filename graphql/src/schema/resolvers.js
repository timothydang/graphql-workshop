import fetch from 'node-fetch';
// import { take } from 'lodash';

const REST_SERVICE_URL = 'http://localhost:8101'

const fetchAllPosts = async () => {
  const response = await fetch(`${REST_SERVICE_URL}/posts`);
  const posts = await response.json();
  return posts;
};

const fetchAllUsers = async () => {
  const response = await fetch(`${REST_SERVICE_URL}/users`);
  const users = await response.json();
  return users;
};

let allPosts = null;
let allUsers = null;

const resolvers = {
  Query: {
    hello: (source, args, ctx) => `Hello ${args.name || 'World'}`,
  },
};

export default resolvers;

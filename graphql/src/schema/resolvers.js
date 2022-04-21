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

    posts: async (source, args, ctx) => {
      if (!allPosts) {
        allPosts = await fetchAllPosts();
      }

      return args.limit ? allPosts.slice(0, args.limit) : allPosts;
    },

    users: async (source, args, ctx) => {
      if (!allUsers) {
        allUsers = await fetchAllUsers();
      }

      return args.limit ? allUsers.slice(0, args.limit) : allUsers;
    },
  },

  Mutation: {
    addNewUser: async (root, args, context, info) => {
      if (!allUsers) {
        allUsers = await fetchAllUsers();
      }
      const user = { id: `user${Date.now()}`, ...args.data };

      allUsers.push(user);
      return user;
    }
  },

  Post: {
    user: async (post, args, ctx) => {
      const userId = post.user.id;

      if (!allUsers) {
        allUsers = await fetchAllUsers();
      }

      return allUsers.find((u) => u.id === userId);
    }
  }
};

export default resolvers;

const REST_SERVICE_URL = 'http://localhost:8101/'

const resolvers = {
  Query: {
    hello: (source, args, ctx) => `Hello ${args.name || 'World'}`,

    posts: async (source, args) => {
      const posts = await request({
        uri: `${REST_SERVICE_URL}/posts`,
        json: true,
      });

      return posts;
    },
  },

  // Mutation: {
  // }
};

export default resolvers;

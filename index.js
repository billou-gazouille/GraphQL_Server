const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const { games, authors, reviews } = require('./data');

const typeDefs = require('./schema');

const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
        game: (parent, args) => games.find(g => g.id === args.id),
    },
    Game: {
        noice: () => 'NOICE',
        title: (parent) => parent.title,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});
  
startStandaloneServer(server, {
    listen: { port: 4000 }
})
.then(() => console.log('Server running'))
.catch(() => console.log('Failed to run server'));
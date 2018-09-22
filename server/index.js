require('dotenv').config();
//import apollo-server
const { ApolloServer } = require('apollo-server');
const PORT = 7000;
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { connectors } = require('./connectors');



const server = new ApolloServer({resolvers, typeDefs});
server.listen({port: PORT}).then(({url}) => console.log(`Listening on ${url}`))
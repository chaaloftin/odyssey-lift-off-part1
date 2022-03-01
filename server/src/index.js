const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// make server defined by schema
const server = new ApolloServer({ typeDefs });

// instantiate server
server.listen().then(() => {
  console.log(`
        Server is running!
        Listening on port 4000
        Query at https://studio.apollographql.com/dev
    `);
});

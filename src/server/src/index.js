require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./modules/media-panel/gqlSchema");
const resolvers = require("./modules/media-panel/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
const port = process.env.PORT || 5001;

server.applyMiddleware({ app });

app.listen({ port }, () => {
	console.log(
		`Server running on http://localhost:${port}${server.graphqlPath}`
	);
});

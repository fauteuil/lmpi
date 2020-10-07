// const express = require("express");
// const path = require("path");
// const CONFIG = require("@lmpi/config");

// const app = express();

// // TODO: Write API

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// app.use(express.static(path.join(__dirname, "../client/build")));

// app.listen(CONFIG.PORT, () => console.log(`Listening on ${CONFIG.PORT}`));

require("dotenv").config();
// require("./config/database");
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./modules/media-panel/gqlSchema");
const resolvers = require("./modules/media-panel/resolvers");
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
const port = process.env.PORT || 5000;

server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(
    `Server running on http://localhost:${port}${server.graphqlPath}`
  );
});

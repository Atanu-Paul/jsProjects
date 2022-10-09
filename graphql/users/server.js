"use strict";
require("dotenv").config();
require("colors");

const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;
const schema = require("./models/schema");

const server = express();

const PORT = process.env.APP_PORT;

server.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

server.listen(PORT, () => {
  console.log(
    `EXPRESS GRAPHQL SERVER LISTING ON PORT NUMBER : ${PORT}`.underline.red
  );
});

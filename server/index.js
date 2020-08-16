import { GraphQLServer, PubSub } from "graphql-yoga";
import schema from "./graphql";
import models from "./models/User";

const mongoose = require("mongoose");
const keys = require("./config/keys");

const pubsub = new PubSub();

const options = {
  port: process.env.PORT || "4000",
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

const context = {
  models,
  pubsub,
};

mongoose.connect(keys.mongoUri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = new GraphQLServer({
  schema,
  context,
});

server.start(options, ({ port }) => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

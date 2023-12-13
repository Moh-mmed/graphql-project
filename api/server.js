import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";
import Query from "./resolvers/Query.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

// yes

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

//* Connecting To The DB
mongoose.connect(DB).then(() => {
  console.log('DB Connected Successfully!');
});

//* Resolvers
const resolvers = {
  Query
};

//* Server 
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const port = process.env.PORT || 8080;
const { url } = await startStandaloneServer(server, {
//   context: async ({ req, res }) => ({
//     data,
//   }),
  listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);

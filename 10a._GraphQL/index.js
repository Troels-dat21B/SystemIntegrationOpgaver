import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import resolvers from "./data/resolvers";

const PORT = 8080;

const app = express();

const root = resolvers;

// Define a route for the default home page
app.get("/", (req, res) => {
  res.send("Greetings from GraphQL server!");
});

// Use the /graphql endpoint to handle incoming GraphQL queries
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, //This line gives us the GraphiQL interface to test our queries. On the browser, go to localhost:8080/graphql to access the GraphiQL interface. Or whatever port you are using.
  })
);

// Start the server on the given port
app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}/graphql`);
});

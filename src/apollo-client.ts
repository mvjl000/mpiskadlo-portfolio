import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.datocms.com/",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.CMS_TOKEN}`,
  },
});

export default client;

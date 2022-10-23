import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:8000/",
  }),
});

export default client;

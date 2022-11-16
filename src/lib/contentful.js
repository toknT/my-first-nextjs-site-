import { createClient } from "contentful";

/*
query {
posts:blogPostCollection {
  items{
    title
    date
    tags
    sys{
      id
    }
  }
}
}
 */
const SPACE = publicRuntimeConfig.CONTENTFUL_SPACE_ID;
const TOKEN = publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/explore?access_token=${TOKEN}`;
const httpLink = createHttpLink({
  fetch,
  uri: CONTENTFUL_URL,
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache().restore(initialState || {}),
});
export const buildClient = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });
  return client;
};
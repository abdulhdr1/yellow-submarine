import { gql, ApolloClient, InMemoryCache } from "@merged/solid-apollo";
import { createHttpLink } from "@apollo/client/core";
import { json } from "solid-start";

const link = createHttpLink({
  uri: import.meta.env.VITE_APP_CMS_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_CMS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const GET_READS = gql`
  {
    allReads {
      title
      author
      platform
      link
    }
  }
`;

export async function GET() {
  const { data } = await client.query({ query: GET_READS });

  return json(data);
}

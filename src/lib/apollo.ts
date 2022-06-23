import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4pup4xz2g9n01yw1docdpko/master',
    cache: new InMemoryCache()
})
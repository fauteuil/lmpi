import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import dotenv from "dotenv";

// ENV vars
dotenv.config();

const DEV: string = "http://localhost:5001";
const TEST: string = "https://loom-ui.aort.theplatform.com";
const PROD: string = "https://console.theplatform.com";

const origin =
	process.env.NODE_ENV === "production"
		? PROD
		: process.env.NODE_ENV === "test"
		? TEST
		: DEV;

const httpLink = createHttpLink({
	uri: `${origin}/graphql`
});

const getClient = (authorization?: string) => {
	const authLink: ApolloLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization
			},
			onError: () => {},
			setOnError: () => ({})
		};
	});

	const link = authLink.concat(httpLink);

	return new ApolloClient({
		link,
		cache: new InMemoryCache()
	});
};

export { getClient };

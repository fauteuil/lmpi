import React, { FC } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./config/create-apollo-client";
import { RecoilRoot } from "recoil";
import { View } from "./components/view";

const App: FC<any> = () => {
	return (
		<RecoilRoot>
			<ApolloProvider client={apolloClient}>
				<View />
			</ApolloProvider>
		</RecoilRoot>
	);
};

export { App };

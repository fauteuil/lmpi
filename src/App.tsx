import React, { FC } from "react";
import { ApolloProvider } from "react-apollo";
import { getClient } from "./config/create-apollo-client";
import { RecoilRoot } from "recoil";
import { View } from "./components/view";

const App: FC<any> = () => {
	return (
		<RecoilRoot>
			<ApolloProvider client={getClient()}>
				<View />
			</ApolloProvider>
		</RecoilRoot>
	);
};

export { App };

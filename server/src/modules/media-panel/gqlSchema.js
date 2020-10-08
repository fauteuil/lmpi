const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type MediaPanel {
		added: String
		guid: String
		id: String
		locked: String
		order: String
		title: String
		updated: String
	}

	input CreateMediaPanelInput {
		guid: String
		locked: String
		order: String
		title: String!
	}

	input UpdateMediaPanelInput {
		id: String!
		username: String!
		description: String!
		duration: String
		category: String
		date: String
	}

	type Query {
		mediaPanelList: [MediaPanel]
		mediaPanelDetails(id: String!): MediaPanel
	}

	type Mutation {
		addMediaPanel(
			username: String
			description: String
			duration: String
			category: String
			date: String
		): MediaPanel
		updateMediaPanel(
			id: String
			username: String
			description: String
			duration: String
			category: String
			date: String
		): MediaPanel
		deleteMediaPanel(id: String): MediaPanel
	}
`;

module.exports = typeDefs;

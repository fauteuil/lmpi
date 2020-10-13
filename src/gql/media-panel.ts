import gql from "graphql-tag";

export const getMediaPanelListQuery = gql`
	query getMediaPanelList {
		mediaPanelList {
			added
			guid
			id
			locked
			order
			title
			updated
		}
	}
`;

export const getMediaPanelDetailsQuery = gql`
	query getMediaPanelDetails($id: String!) {
		mediaPanelDetails(id: $id) {
			category
			date
			description
			duration
			id
			username
		}
	}
`;

export const updateMediaPanelMutation = gql`
	mutation updateMediaPanel(
		$category: String
		$date: String
		$description: String
		$duration: String
		$id: String
		$username: String
	) {
		updateMediaPanel(
			category: $category
			date: $date
			description: $description
			duration: $duration
			id: $id
			username: $username
		) {
			id
			description
		}
	}
`;

export const createMediaPanelMutation = gql`
	mutation createMediaPanel(
		$category: String
		$date: String
		$description: String
		$duration: String
		$id: String
		$username: String
	) {
		credateMediaPanel(
			category: $category
			date: $date
			description: $description
			duration: $duration
			id: $id
			username: $username
		) {
			description
			id
		}
	}
`;

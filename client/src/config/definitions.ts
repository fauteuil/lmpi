export interface IMediaPanel {
	added: string;
	guid?: string;
	id?: string;
	locked?: string;
	order?: string;
	title: string;
	updated?: string;
}

export type MediaPanelKeys = keyof IMediaPanel;

export type MediaPanel = Pick<IMediaPanel, MediaPanelKeys>;

export interface IListItem {
	selected?: boolean;
}

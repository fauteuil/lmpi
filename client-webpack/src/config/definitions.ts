export interface IMediaPanel {
  date: string;
  description: string;
  duration?: string;
  category?: string;
  imageUrl?: string;
  id?: string;
  username: string;
}

export type MediaPanelKeys = keyof IMediaPanel;

export type MediaPanel = Pick<IMediaPanel, MediaPanelKeys>;

export interface IListItem {
  selected?: boolean;
}

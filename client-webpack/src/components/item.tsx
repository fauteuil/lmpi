import React, { FC } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { IMediaPanel, IListItem } from "../config/definitions";
// import { EXERCISE_BG_HIGHLIGHT_COLOR } from "./index";

export const ListItemWrapper = styled.div<IListItem>`
  background-color: ${(props) =>
    props.selected ? `rgba(213, 223, 233, 0.4)` : `rgba(213, 223, 233, 0.1)`};
  &:hover {
    background-color: rgba(243, 253, 253, 0.3);
  }
  padding: 1rem;
`;

export interface IMediaPanelListItemProps extends IListItem {
  mediaPanel: IMediaPanel;
  onSelect?: (mediaPanel: IMediaPanel) => void;
}

export const MediaPanelListItem: FC<IMediaPanelListItemProps> = ({
  mediaPanel,
  onSelect,
  selected
}) => {
  const handleRowClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.stopPropagation();

    if (onSelect) {
      onSelect(mediaPanel);
    }
  };

  return (
    <ListItemWrapper
      key={mediaPanel.id}
      onClick={handleRowClick}
      selected={selected}
    >
      {mediaPanel.id}
      <br />
      {mediaPanel.category}
      <br />
      {mediaPanel.username}:{" "}
      {/* <Link to={`/mediaPanels/${mediaPanel.id}`}>{mediaPanel.description}</Link> */}
      <a href={`#/mediaPanels/${mediaPanel.id}`}>{mediaPanel.description}</a>
      <br />
      {mediaPanel.duration} {` reps`}
      <br />
      {mediaPanel.date}
    </ListItemWrapper>
  );
};

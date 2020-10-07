import React, { FC, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
// import { LoadingAnimation } from "../../components/layout/loading-animation";
import { IMediaPanel } from "../config/definitions";
import { getMediaPanelListQuery } from "../gql/media-panel";
import { MediaPanelListItem } from "./item";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

export interface IMediaPanelListProps {
  autoSelectFirstItem?: boolean;
  onSelectMediaPanel?: (mediaPanel: IMediaPanel) => void;
  selectedId?: string;
}

export const MediaPanelList: FC<IMediaPanelListProps> = ({
  autoSelectFirstItem,
  onSelectMediaPanel: onSelect,
  selectedId
}) => {
  const { loading, error, data } = useQuery(getMediaPanelListQuery);

  // Select the first item when flagged.
  const defaultMediaPanel =
    !selectedId && autoSelectFirstItem
      ? data?.mediaPanelList
        ? data.mediaPanelList[0]
        : null
      : null;

  useEffect(() => {
    if (defaultMediaPanel && onSelect) {
      onSelect(defaultMediaPanel);
    }
  }, [loading]);

  //   if (loading) return <LoadingAnimation />;
  if (loading) return <span>Loading...</span>;
  if (error)
    return (
      <p>
        Error :(
        <br />
        {error}
      </p>
    );

  const currentId = selectedId || defaultMediaPanel?.id;

  return (
    <ListWrapper>
      {data?.mediaPanelList?.map((mediaPanel: IMediaPanel) => (
        <MediaPanelListItem
          selected={mediaPanel?.id === currentId}
          mediaPanel={mediaPanel}
          onSelect={onSelect}
          key={mediaPanel.id}
        />
      ))}
    </ListWrapper>
  );
};

MediaPanelList.defaultProps = {
  autoSelectFirstItem: true
};

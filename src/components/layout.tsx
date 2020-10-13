import React from "react";
import styled from "styled-components";

export const ViewBase = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

export const PanelContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SidebarPanel = styled("div")`
  overflow-y: auto;
  margin: 0.5rem;
  flex-grow: 1;
  border: 0.25rem solid blue;
  flex-basis: 30%;
  min-width: 20rem;
  max-height: calc(100vh - 3rem);
`;

export const ContentPanel = styled("div")`
  overflow-y: auto;
  margin: 0.5rem;
  flex-basis: 0;
  flex-grow: 999;
  min-width: calc(50% - 0.5rem);
  border: 0.25rem solid red;
  max-height: calc(100vh - 3rem);
`;

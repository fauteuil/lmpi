import React from "react";
import styled from "styled-components";

export const ViewBase = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

export const PanelContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
`;

export const SidebarPanel = styled("div")`
  margin: 0.5rem;
  flex-grow: 1;
  border: 0.25rem solid blue;
  flex-basis: 20rem;
`;

export const Sidebar = styled("div")``;

export const ContentPanel = styled("div")`
  margin: 0.5rem;
  flex-basis: 0;
  flex-grow: 999;
  min-width: calc(50% - 0.5rem);
  border: 0.25rem solid red;
`;

export const Content = styled("div")``;

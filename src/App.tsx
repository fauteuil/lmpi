import React, { FC } from "react";
import {
  Content,
  ContentPanel,
  PanelContainer,
  Sidebar,
  SidebarPanel,
  ViewBase
} from "./components/layout";

const App: FC<any> = () => {
  return (
    <ViewBase>
      <PanelContainer>
        <SidebarPanel>
          <Sidebar>menu</Sidebar>
        </SidebarPanel>
        <ContentPanel>
          <Content>Media Panel Importer TeeEss!</Content>
        </ContentPanel>
      </PanelContainer>
    </ViewBase>
  );
};

export { App };

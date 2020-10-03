import React, { FC } from "react";
import { RecoilRoot } from "recoil";
import { View } from "./components/view";

const App: FC<any> = () => {
  return (
    <RecoilRoot>
      <View />
    </RecoilRoot>
  );
};

export { App };

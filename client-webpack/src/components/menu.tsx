import React from "react";
import styled from "styled-components";

const MenuContainer = styled("div")`
  background: linear-gradient(
      194.6deg,
      rgba(255, 255, 255, 0.45) 22.72%,
      rgba(255, 255, 255, 0) 73.92%
    ),
    #ccffcc;
`;

export const Menu = () => {
  return (
    <MenuContainer>
      Le Menu
      <div>- Item 1</div>
      <div>- Item 2</div>
      <div>- Item 3</div>
      <div>- Item 4</div>
      <div>- Item 5</div>
    </MenuContainer>
  );
};

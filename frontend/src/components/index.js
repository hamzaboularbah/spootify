import React from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import RouterView from "../router";

const StyleBase = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Content = styled.div`
  margin-left: 341px;
  grid-column: 2;
`;

const Spootify = () => {
  return (
    <StyleBase>
      <SideBar />
      <Content>
        <RouterView></RouterView>
      </Content>
    </StyleBase>
  );
};

export default Spootify;

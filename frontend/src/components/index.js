import React from "react";
import SideBar from "./SideBar";
import Player from "../components/Player";
import styled from "styled-components";
import DashboardRoutes from "../router";

const StyleBase = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Content = styled.div`
  margin-left: 341px;
  grid-column: 2;
  .spinner {
    width: 50px;
    margin: 30% auto;
    position: relative;
  }
`;

const Spootify = () => {
  return (
    <StyleBase>
      <SideBar />
      <Content>
        <DashboardRoutes></DashboardRoutes>
      </Content>
      {/* <Player /> */}
    </StyleBase>
  );
};

export default Spootify;

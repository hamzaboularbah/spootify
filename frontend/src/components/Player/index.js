import React from "react";
import {
  StyleBase,
  SongPlayer,
  SongDetails,
  PlayerBackground,
  SongPlayerContent
} from "./style";

const Player = () => {
  return (
    <StyleBase>
      <SongDetails />
      <SongPlayer>
        <PlayerBackground />
        <SongPlayerContent></SongPlayerContent>
      </SongPlayer>
    </StyleBase>
  );
};
export default Player;

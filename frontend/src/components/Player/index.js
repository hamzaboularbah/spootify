import React, { useEffect, useContext } from "react";
import Track from "../Track";
import { MainContext } from "../../store";
import {
  StyleBase,
  SongPlayer,
  SongDetails,
  PlayerBackground,
  SongPlayerContent
} from "./style";

const Player = () => {
  const { Spotify, currentTrack, setCurrentTrack } = useContext(MainContext);
  useEffect(_ => {
    Spotify.getMyCurrentPlayingTrack().then(track => {
      setCurrentTrack(track.item);
    });
  }, []);
  return (
    <StyleBase>
      <SongDetails>
        {currentTrack && currentTrack.id ? (
          <Track isInPlayer track={currentTrack} />
        ) : (
          ""
        )}
      </SongDetails>
      <SongPlayer>
        <PlayerBackground />
        <SongPlayerContent></SongPlayerContent>
      </SongPlayer>
    </StyleBase>
  );
};
export default Player;

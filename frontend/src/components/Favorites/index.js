import React, { useEffect, useContext, useState } from "react";
import { MainContext } from "../../store";
import Track from "../Track";
import styled from "styled-components";
import Spinner from "../kits/Spinner";

const StyleBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
`;

const Favorites = () => {
  const { Spotify } = useContext(MainContext);
  const [favTracks, setFavTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const trackIds = JSON.parse(localStorage.getItem("liked-songs"));
    if (trackIds)
      Spotify.getTracks(trackIds).then(tracks => {
        setFavTracks(tracks.tracks);
        setIsLoading(false);
      });
    else setIsLoading(false);
  }, [Spotify]);
  return (
    <StyleBase>
      {!isLoading ? (
        favTracks.length > 0 ? (
          favTracks.map(track => <Track key={track.id} track={track}></Track>)
        ) : (
          <p>You have no favorite track for now 😞, get a taste 😏 </p>
        )
      ) : (
        <Spinner />
      )}
    </StyleBase>
  );
};

export default Favorites;

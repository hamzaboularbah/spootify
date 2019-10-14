import React, { useEffect, useContext, useState } from "react";
import Track from "../Track";
import { MainContext } from "../../store";

const Playlist = ({ match }) => {
  const [tracks, setTracks] = useState([]);
  const { playlistId } = match.params;
  const { Spotify } = useContext(MainContext);
  useEffect(() => {
    const songs = [];
    const options = {
      offset: 90,
      limit: 100,
      fields: "items"
    };
    Spotify.getPlaylistTracks(playlistId, options).then(data => {
      data.items.forEach(item => {
        songs.push(item.track);
      });
    });
    setTracks(songs);
  }, [Spotify, playlistId]);

  return (
    <>
      {tracks.map(track => (
        <Track key={track.id} track={track}></Track>
      ))}
    </>
  );
};

export default Playlist;

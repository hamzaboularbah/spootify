import React, { useState } from "react";
import SpotifyWebPlayer from "spotify-web-api-js";

const Provider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [playbackState, setPlaybackState] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const [activeNavLink, setActiveNavLink] = useState(2);
  const [currentTrack, setCurrentTrack] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const Spotify = new SpotifyWebPlayer();
  const device_id = localStorage.getItem("_spharmony_device_id");
  Spotify.setAccessToken(localStorage.getItem("spootify-token"));

  const handlePlay = track => {
    !isPlaying
      ? Spotify.play({
          device_id,
          uris: [track.uri || currentTrack.uri]
        }).then(_ => {
          setCurrentTrack(track.uri ? track : currentTrack);
        })
      : Spotify.pause({ device_id });

    setIsPlaying(!isPlaying);
  };
  return (
    <MainContext.Provider
      value={{
        profile,
        setProfile,
        playbackState,
        setPlaybackState,
        playlists,
        setPlaylists,
        activeNavLink,
        setActiveNavLink,
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        handlePlay,
        device_id,
        Spotify
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const MainContext = React.createContext({});
export default Provider;

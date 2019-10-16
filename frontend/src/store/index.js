import React, { useState } from "react";
import SpotifyWebPlayer from "spotify-web-api-js";

const Provider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [playlists, setPlaylists] = useState({});
  const [activeNavLink, setActiveNavLink] = useState(2);
  const Spotify = new SpotifyWebPlayer();
  const device_id = localStorage.getItem("_spharmony_device_id");
  Spotify.setAccessToken(localStorage.getItem("spootify-token"));
  return (
    <MainContext.Provider
      value={{
        profile,
        setProfile,
        playlists,
        setPlaylists,
        activeNavLink,
        setActiveNavLink,
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

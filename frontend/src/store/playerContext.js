import React, { useState } from 'react';
import SpotifyWebPlayer from 'spotify-web-api-js';

export const playerContext = React.createContext({});

const PlayerContextProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState({});
  const [playbackState, setplaybackState] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const device_id = localStorage.getItem('_spharmony_device_id');
  const Spotify = new SpotifyWebPlayer();
  Spotify.setAccessToken(localStorage.getItem('spootify-token'));

  const handlePlay = (track = null) => {
    if (track) {
      isPlaying && track.id === currentTrack.id
        ? Spotify.pause({ device_id }).then(_ => setIsPlaying(false))
        : Spotify.play({
            device_id,
            uris: [track.uri || currentTrack.uri],
          }).then(_ => {
            setCurrentTrack(track.uri ? track : currentTrack);
            setIsPlaying(true);
          });
    }
  };
  return (
    <playerContext.Provider
      value={{
        playbackState,
        setplaybackState,
        currentTrack,
        setCurrentTrack,
        isPlaying,
        setIsPlaying,
        handlePlay,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerContextProvider;

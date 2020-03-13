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

  const updateCurrentTrack = (fromNext = null) => {
    Spotify.getMyCurrentPlayingTrack().then(data => {
      setCurrentTrack(data.item);
      setIsPlaying(data.is_playing);
      if (fromNext) handlePlay(data.item.id);
    });
  };
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
  const handleNext = _ => {
    Spotify.skipToNext().then(() => {
      console.log('next');
      updateCurrentTrack(true);
    });
  };
  const handlePrev = _ => {
    Spotify.skipToPrevious().then(() => {
      updateCurrentTrack(true);
    });
  };

  const handleRepeat = _ => {
    if (
      playbackState.repeat_state !== 'context' &&
      playbackState.repeat_state !== 'track'
    ) {
      Spotify.setRepeat('track').then(() => {});
    } else {
      Spotify.setRepeat('off').then(() => {});
    }
  };
  const handleShuffle = _ => {
    Spotify.setShuffle(!playbackState.shuffle_state);
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
        handleNext,
        handlePrev,
        handleRepeat,
        handleShuffle,
        updateCurrentTrack,
      }}
    >
      {children}
    </playerContext.Provider>
  );
};

export default PlayerContextProvider;

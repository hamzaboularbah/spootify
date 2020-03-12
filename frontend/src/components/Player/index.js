import React, { useEffect, useContext } from 'react';
import Track from '../Track';
import { MainContext } from '../../store';
import { playerContext } from '../../store/playerContext';
import { millisToMinutesAndSeconds } from '../../utils';
import {
  StyleBase,
  SongPlayer,
  SongDetails,
  PlayerBackground,
  PlayerControls,
  Shuffle,
  Previous,
  Play,
  Next,
  Repeat,
  ProgressBar,
  Timing,
  Volume,
  VolumeProgress,
} from './style';

const Player = () => {
  const {
    handlePlay,
    setCurrentTrack,
    currentTrack,
    isPlaying,
    setIsPlaying,
    playbackState,
    setplaybackState,
  } = useContext(playerContext);
  const { Spotify } = useContext(MainContext);

  useEffect(_ => {
    Spotify.getMyCurrentPlayingTrack().then(data => {
      setCurrentTrack(data.item);
      setIsPlaying(data.is_playing);
    });
    setInterval(() => {
      Spotify.getMyCurrentPlaybackState().then(playback => {
        setIsPlaying(playback.is_playing);
        if (playback) setplaybackState(playback);
        if (playback.item && playback.item.id !== currentTrack.id)
          setCurrentTrack(playback.item);
      });
    }, 1000);
  }, []);
  return (
    <StyleBase>
      <SongDetails>
        {currentTrack && currentTrack.id ? (
          <Track isInPlayer track={currentTrack} />
        ) : (
          ''
        )}
      </SongDetails>
      <SongPlayer>
        <PlayerBackground />
        <PlayerControls>
          <Shuffle>
            <svg
              fill='#51596D'
              width='20'
              height='17'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='M19.775 12.89l-3.75-3.035a.641.641 0 00-.665-.084c-.22.1-.36.314-.36.55v1.821h-1.046c-.868 0-1.66-.427-2.12-1.141l-4.048-6.29c-.918-1.43-2.503-2.283-4.24-2.283H0v2.429h3.546c.868 0 1.66.427 2.12 1.141l4.048 6.29c.92 1.43 2.505 2.283 4.24 2.283H15v1.821c0 .236.14.45.36.55a.65.65 0 00.265.058.63.63 0 00.4-.141l3.75-3.036a.597.597 0 000-.933z' />
                <path d='M19.775 3.176L16.025.14a.64.64 0 00-.665-.082.603.603 0 00-.36.549v1.821h-1.046c-1.737 0-3.322.854-4.24 2.283l-.226.352 1.473 2.291.873-1.356a2.505 2.505 0 012.12-1.141H15v1.821c0 .236.14.45.36.55a.636.636 0 00.665-.084l3.75-3.035a.597.597 0 000-.933zM6.539 9.645L5.668 11a2.507 2.507 0 01-2.122 1.141H0v2.429h3.546c1.735 0 3.32-.854 4.24-2.283l.226-.352L6.54 9.645z' />
              </g>
            </svg>
          </Shuffle>
          <Previous>
            <svg width='20' height='16' xmlns='http://www.w3.org/2000/svg'>
              <g fill='#51596D'>
                <path d='M8.253.313A1.376 1.376 0 006.76.61L.541 6.633a1.754 1.754 0 00.012 2.545l6.25 6.025c.404.389.919.506 1.448.296.528-.21.78-.705.78-1.253V1.566c0-.548-.248-1.044-.778-1.253zM19.077.267a1.414 1.414 0 00-1.516.297L11.33 6.588c-.73.703-.723 1.84.006 2.545l6.247 6.023c.404.39.964.507 1.493.297.528-.21.825-.704.825-1.254V1.521c0-.55-.295-1.044-.824-1.254z' />
              </g>
            </svg>
          </Previous>
          <Play onClick={() => handlePlay(currentTrack)}>
            {isPlaying ? (
              <svg width='11' height='17' xmlns='http://www.w3.org/2000/svg'>
                <g fill='#FFFFFF'>
                  <path d='M2.123 0C1.09 0 .255.779.255 1.74v12.512c0 .961.836 1.74 1.868 1.74s1.868-.78 1.868-1.74V1.74C3.99.78 3.155 0 2.123 0zM8.848 0C7.816 0 6.98.779 6.98 1.74v12.512c0 .96.836 1.74 1.868 1.74s1.868-.78 1.868-1.74V1.74C10.716.78 9.88 0 8.848 0z' />
                </g>
              </svg>
            ) : (
              <svg width='17' height='17' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.543 6.841L3.352.158C2.992-.03 2.544.002 2.206.002.854.002.86.91.86 1.14v13.661c0 .195-.006 1.139 1.346 1.139.338 0 .786.03 1.146-.156L15.542 9.1c1.001-.518.828-1.13.828-1.13s.173-.61-.827-1.129z'
                  fill='#FFFFFF'
                />
              </svg>
            )}
          </Play>
          <Next>
            <svg
              fill='#51596D'
              transform='rotate(180)'
              width='20'
              height='16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='M8.253.313A1.376 1.376 0 006.76.61L.541 6.633a1.754 1.754 0 00.012 2.545l6.25 6.025c.404.389.919.506 1.448.296.528-.21.78-.705.78-1.253V1.566c0-.548-.248-1.044-.778-1.253zM19.077.267a1.414 1.414 0 00-1.516.297L11.33 6.588c-.73.703-.723 1.84.006 2.545l6.247 6.023c.404.39.964.507 1.493.297.528-.21.825-.704.825-1.254V1.521c0-.55-.295-1.044-.824-1.254z' />
              </g>
            </svg>
          </Next>
          <Repeat>
            <svg
              fill='#51596D'
              width='20'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='M19.78 3.926L16.035.183a.623.623 0 00-1.065.44v1.872h-8.11a6.86 6.86 0 00-6.86 6.861c0 .345.279.624.623.624H3.12c.345 0 .624-.28.624-.624a3.118 3.118 0 013.119-3.118h8.11v1.87a.624.624 0 001.064.442l3.743-3.742a.624.624 0 000-.882zM19.338 9.98h-2.496a.624.624 0 00-.623.624 3.118 3.118 0 01-3.12 3.119H4.992v-1.871a.624.624 0 00-1.066-.44L.182 15.153a.624.624 0 000 .882l3.743 3.743a.625.625 0 001.065-.442v-1.871h8.11a6.86 6.86 0 006.861-6.862.624.624 0 00-.623-.624z' />
              </g>
            </svg>
          </Repeat>
          <Timing>
            {' '}
            {currentTrack && currentTrack.id && playbackState.progress_ms
              ? millisToMinutesAndSeconds(playbackState.progress_ms)
              : '0:00'}
          </Timing>
          <ProgressBar
            width={
              currentTrack && currentTrack.id
                ? (playbackState.progress_ms * 312) / currentTrack.duration_ms +
                  'px'
                : 0
            }
          ></ProgressBar>
          <Timing>
            {currentTrack && currentTrack.id
              ? millisToMinutesAndSeconds(currentTrack.duration_ms)
              : '0:00'}
          </Timing>
          <Volume></Volume>
          <VolumeProgress></VolumeProgress>
        </PlayerControls>
      </SongPlayer>
    </StyleBase>
  );
};
export default Player;

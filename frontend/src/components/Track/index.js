import React from 'react';
import Play from './Play';
import Like from './Like';
import { TrackCard, TrackCardContent, TrackCover, TrackDetails } from './style';
import { millisToMinutesAndSeconds } from '../../utils';

const Track = ({ track, isInPlayer = false }) => {
  const fullTrack = (
    <TrackCard isInPlayer={isInPlayer}>
      <TrackCardContent>
        {!isInPlayer ? <Play track={track}></Play> : ''}
        <TrackCover>
          <img
            src={track.album.images[track.album.images.length - 1].url}
            alt=''
          />
        </TrackCover>
        <TrackDetails>
          <p>
            <span>
              {!isInPlayer && track.name.length > 20
                ? `${track.name.substring(0, 20)}...`
                : track.name}
            </span>
            {!isInPlayer && track.album.name.length > 20
              ? `${track.album.name.substring(0, 20)}...`
              : track.album.name}
          </p>
          {!isInPlayer ? (
            <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
          ) : (
            ''
          )}
        </TrackDetails>
        <Like trackId={track.id} />
      </TrackCardContent>
    </TrackCard>
  );

  return <>{track.id && fullTrack}</>;
};

export default Track;

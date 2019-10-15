import React from "react";
import Play from "./Play";
import Like from "./Like";
import { TrackCard, TrackCardContent, TrackCover, TrackDetails } from "./style";
import { millisToMinutesAndSeconds } from "../../utils";

const Track = ({ track }) => {
  return (
    <>
      {track.id && (
        <TrackCard>
          <TrackCardContent>
            <Play uri={track.uri}></Play>
            <TrackCover>
              <img
                src={track.album.images[track.album.images.length - 1].url}
                alt=""
              />
            </TrackCover>
            <TrackDetails>
              <p>
                <span>
                  {track.name.length > 20
                    ? `${track.name.substring(0, 20)}...`
                    : track.name}
                </span>
                {track.album.name.length > 20
                  ? `${track.album.name.substring(0, 20)}...`
                  : track.album.name}
              </p>
              <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
            </TrackDetails>
            <Like trackId={track.id} />
          </TrackCardContent>
        </TrackCard>
      )}
    </>
  );
};

export default Track;

import React from "react";
import Play from "./Play";
import Like from "./Like";
import styled from "styled-components";
import { millisToMinutesAndSeconds } from "../../utils";

const TrackCard = styled.div`
  width: 100%;
  max-width: 419px;
  border-radius: 8px;
  background-color: #ffffff;
`;
const TrackCardContent = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 16.5px;
`;
const TrackCover = styled.div`
  margin: 0px 16px 0px 25px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 3px;
  }
`;
const TrackDetails = styled.div`
  width: 220px;
  display: flex;
  margin-right: 25px;
  align-items: center;
  justify-content: space-between;
  p {
    color: #51596d;
    font-size: 14px;
    line-height: 16px;
    span {
      color: #1c1e25;
      display: block;
      line-height: 14px;
      font-weight: bold;
      margin-bottom: 3px;
      letter-spacing: 0.4px;
    }
    :last-child {
      opacity: 0.7;
    }
  }
`;

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
                <span>{track.name}</span>
                {track.album.name}
              </p>
              <p>{millisToMinutesAndSeconds(track.duration_ms)}</p>
            </TrackDetails>
            <Like />
          </TrackCardContent>
        </TrackCard>
      )}
    </>
  );
};

export default Track;

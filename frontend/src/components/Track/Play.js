import React, { useContext } from "react";
import { MainContext } from "../../store";
import styled from "styled-components";

const Play = ({ track }) => {
  const { currentTrack, isPlaying, handlePlay } = useContext(MainContext);
  const SVG = styled.svg`
    animation: ${props =>
      !props.loading && track && currentTrack && currentTrack.id === track.id
        ? "crescendo 0.3s alternate infinite ease-in"
        : ""};
    @keyframes crescendo {
      0% {
        transform: scale(0.8);
      }
      100% {
        transform: scale(1);
      }
    }
  `;
  const play = (
    <SVG
      loading={isPlaying}
      onClick={() => handlePlay(track)}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.543 6.841L3.352.158C2.992-.03 2.544.002 2.206.002.854.002.86.91.86 1.14v13.661c0 .195-.006 1.139 1.346 1.139.338 0 .786.03 1.146-.156L15.542 9.1c1.001-.518.828-1.13.828-1.13s.173-.61-.827-1.129z"
        fill="#51596D"
        opacity=".6"
      />
    </SVG>
  );
  const pause = (
    <svg
      onClick={() => handlePlay(track)}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#51596D" opacity=".6">
        <path d="M2.123 0C1.09 0 .255.779.255 1.74v12.512c0 .961.836 1.74 1.868 1.74s1.868-.78 1.868-1.74V1.74C3.99.78 3.155 0 2.123 0zM8.848 0C7.816 0 6.98.779 6.98 1.74v12.512c0 .96.836 1.74 1.868 1.74s1.868-.78 1.868-1.74V1.74C10.716.78 9.88 0 8.848 0z" />
      </g>
    </svg>
  );

  return (
    <>
      {isPlaying && currentTrack && currentTrack.id === track.id ? pause : play}
    </>
  );
};
export default Play;

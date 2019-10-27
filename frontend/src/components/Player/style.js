import styled, { css } from "styled-components";
const sharedStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 36px;
`;

export const StyleBase = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  height: 80px;
`;

export const SongPlayer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PlayerBackground = styled.div`
  position: absolute;
  background-color: #fff;
  filter: blur(8px);
  opacity: 0.85;
  width: 100%;
  height: 100%;
`;
export const PlayerControls = styled.div`
  position: relative;
  margin-left: 68px;
  display: flex;
  align-items: center;
  height: 100%;
`;
export const SongDetails = styled.div`
  background-color: #ffffff;
  width: 525px;
`;

export const Shuffle = styled.div`
  ${sharedStyle}
  width: 24px;
  height: 24px;
`;
export const Previous = styled.div`
  ${sharedStyle}
  width: 24px;
  height: 24px;
`;
export const Play = styled.div`
  ${sharedStyle}
  width: 48px;
  height: 48px;
  background-color: #1de9b6;
  border-radius: 50%;
`;
export const Next = styled.div`
  ${sharedStyle}
  width: 24px;
  height: 24px;
`;
export const Repeat = styled.div`
  ${sharedStyle}
  width: 24px;
  height: 24px;
`;
export const CurrentPlayTime = styled.div``;
export const ProgressBar = styled.div``;
export const Duration = styled.div``;
export const Volume = styled.div`
  ${sharedStyle}
  width: 24px;
  height: 24px;
`;
export const VolumeProgress = styled.div``;

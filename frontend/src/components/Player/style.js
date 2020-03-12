import styled, { css } from 'styled-components';
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
  background-color: #fff;
`;

export const SongPlayer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PlayerBackground = styled.div`
  background-color: #fff;
  /* position: absolute;
    filter: blur(8px);
    opacity: 0.85;
    width: 100%;
    height: 100%; */
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
  min-width: 48px;
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
  margin-right: 68px;
`;
export const Timing = styled.div`
  color: #51596d;
  font-size: 14px;
  line-height: 16px;
  margin: 0px 12px;
`;
export const ProgressBar = styled.div`
  width: 312px;
  border-radius: 20px;
  border: 2px rgba(81, 89, 109, 0.1) solid;
  position: relative;
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    opacity: 1;
    z-index: 2;
    height: 4px;
    width: ${props => props.width};
    border-radius: 20px;
    background-color: rgba(29, 233, 182, 1);
  }
`;
export const Volume = styled.div`
  ${sharedStyle}
  width: 24px;
  height: 24px;
`;
export const VolumeProgress = styled.div``;

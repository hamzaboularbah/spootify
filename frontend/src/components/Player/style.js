import styled from "styled-components";

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
export const SongPlayerContent = styled.div`
  position: relative;
  margin-left: 68px;
`;
export const SongDetails = styled.div`
  background-color: #ffffff;
  width: 525px;
  height: 100%;
`;

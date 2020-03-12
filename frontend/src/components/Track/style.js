import styled from 'styled-components';
export const TrackCard = styled.div`
  max-width: 420px;
  box-shadow: ${props =>
    props.isInPlayer ? 'none' : '0px 2px 4px rgba(0,0,0,0.18)'};
  border-radius: 8px;
  background-color: #fff;
  margin: 10px 0px 10px 10px;
`;
export const TrackCardContent = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 16.5px;
`;
export const TrackCover = styled.div`
  margin: 0px 16px 0px 25px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 3px;
  }
`;
export const TrackDetails = styled.div`
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

import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  width: 305px;
  height: 100%;
  overflow: scroll;
  position: fixed;
  padding: 24px 0px 0px 36px;
  grid-column: 1;
  background-image: linear-gradient(to top, #002740, #013f5e);
`;

export const Section = styled.div`
  margin-top: 36px;
`;
export const Title = styled.h3`
  font-family: sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px;
  line-height: 24px;
  color: white;
  text-transform: uppercase;
  margin: 0;
`;
export const ItemsList = styled.ul`
  list-style: none;
  /* margin-top: 24px; */
  padding: 0;
`;
export const Item = styled.li`
  border-radius: 20px;
  max-width: 233px;
  height: 40px;
  align-items: center;
  display: flex;
  color: white;
  padding-left: 24px;
  cursor: pointer;
  transition: all 0.5s;
  p {
    margin: 0px 0px 0px 16px;
    opacity: 0.8;
    font-size: 16px;
  }
  svg {
    fill: #fff;
  }
  ${({ active }) =>
    active &&
    `
    background: rgb(29, 233, 182, 0.1);
      p {
      color: #1de9b6;
    }
    svg {
      fill: #1de9b6;
    }
  `}
`;

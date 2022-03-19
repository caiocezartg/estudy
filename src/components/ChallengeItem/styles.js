import styled from "styled-components";

export const ItemChallenge = styled.li`
  text-align: center;
  padding: 55px 35px;

  &:nth-child(odd) {
    background-color: #f8f8f8;
  }

  h3 {
    font-weight: 600;
    margin-bottom: 25px;
  }

  span {
    color: #00c165;
    font-size: 34px;
    font-weight: 600;
  }
`;

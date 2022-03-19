import styled from "styled-components";

export const ChallengesContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100vh;

  h2 {
    color: #fff;
    text-align: center;
    margin: 45px 0;
    font-size: 36px;
  }
`;

export const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
`;

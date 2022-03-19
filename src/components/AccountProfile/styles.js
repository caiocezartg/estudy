import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const ProfileContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 25px 50px;
  margin: 30px 0;

  h2 {
    text-align: center;
    margin: 20px 0 40px;
    font-size: 28px;
  }
`;

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px 20px;

  div {
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:nth-child(7),
    &:nth-child(8) {
      border-bottom: none;
    }

    h3 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      color: #a4a4a4;
      font-size: 22px;
    }
  }
`;

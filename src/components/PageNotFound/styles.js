import styled from "styled-components";

export const ErrorContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  h2 {
    color: #fff;
    font-size: 36px;
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    background-color: #004725;
    padding: 15px 20px;
    font-size: 24px;
    border-radius: 8px;
  }
`;

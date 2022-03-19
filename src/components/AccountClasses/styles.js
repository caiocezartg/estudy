import styled from "styled-components";

export const ClassesContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  position: relative;
`;

export const ClassesFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ClassesContent = styled.div`
  flex: 0 0 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 30px;
  margin: 30px 0;
  height: 100%;

  h2 {
    text-align: center;
    color: #4ecb71;
    font-size: 36px;
    margin: 20px 0;
  }

  h4 {
    color: #00c165;
    text-align: center;
    font-size: 24px;
  }
`;

export const ClassesTable = styled.table`
  width: 100%;
  margin-top: 30px;

  tr:nth-child(1) {
    display: flex;

    th {
      flex: 0 0 25%;
      text-align: left;
      color: #00914b;
      font-size: 24px;
    }
  }
`;

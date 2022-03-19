import styled from "styled-components";

export const ContainerRegister = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100vh;
`;

export const HeaderRegister = styled.header`
  padding: 30px 0 60px 0;

  h1 {
    color: #fff;
    font-size: 56px;
    font-weight: 700;
    font-style: italic;
  }
`;

export const RegisterFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RegisterContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 35px;
  flex: 0 0 calc(50% - 30px);
  margin-right: 30px;

  h2 {
    font-weight: 600;
    margin: 30px 0;
    text-align: center;
    font-size: 32px;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const RegisterImg = styled.div`
  flex: 0 0 calc(50% - 30px);
  margin-right: 30px;

  img {
    border-radius: 8px;
  }
`;

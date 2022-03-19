import styled from "styled-components";

export const ContainerLogin = styled.section`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  flex-wrap: wrap;
`;

export const LogoContent = styled.div`
  text-align: center;
  flex: 0 0 calc(50% - 30px);
  padding: 0 15px 0 15px;

  h1 {
    color: #fff;
    font-size: 120px;
    font-style: italic;
    margin-bottom: 30px;
  }

  h3 {
    color: #fff;
    font-size: 42px;
    margin-bottom: 10px;
  }

  img {
    margin: 0 auto;
  }
`;

export const FormContent = styled.div`
  flex: 0 0 calc(50% - 30px);
  padding: 0 15px 0 15px;
`;

export const FormLogin = styled.form`
  background-color: #fff;
  max-width: 70%;
  margin: 0 auto;
  padding: 20px 35px;
  border-radius: 8px;

  h2 {
    text-align: center;
    margin: 20px 0 30px;
    font-size: 28px;
    font-weight: 600;
  }

  .btn-register {
    display: block;
    text-align: center;
    margin-top: 40px;
    color: #0359ff;
  }
`;

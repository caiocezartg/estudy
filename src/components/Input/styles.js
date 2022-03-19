import styled from "styled-components";

export const InputContent = styled.div`
  position: relative;
  margin-bottom: 20px;

  label {
    display: block;
    text-align: left;
    color: #666666;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  input {
    display: block;
    min-width: 0;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #e7e7e7;
    padding: 15px 60px 15px 20px;
    font-size: 18px;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    width: 32px;
    height: 32px;

    position: absolute;
    right: 20px;
    bottom: 10px;
  }

  .icon-password {
    font-size: 32px;
    color: #9b9b9b;
  }
`;

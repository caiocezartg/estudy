import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 8px;
  padding: 20px 25px;
  color: #ffffff;
  background-color: #00dc23;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.9);
  }
`;

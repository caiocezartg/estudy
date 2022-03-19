import styled from "styled-components";

export const Challenge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => (props.completed ? "#004725" : "#FFF")};
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  height: 250px;
  cursor: ${(props) => (props.completed ? "not-allowed" : "pointer")};
  transition: 0.3s transform ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  h3 {
    color: ${(props) => (props.completed ? "#006635" : "#00c165")};
    font-size: 24px;
  }

  span {
    display: ${(props) => (props.completed ? "none" : "block")};
    background-color: #004725;
    color: #fff;
    padding: 10px 15px;
    border-radius: 8px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    font-weight: 500;
  }
`;

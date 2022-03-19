import styled from "styled-components";

export const ItemContent = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;

  &:nth-child(odd) {
    background-color: #f6f6f6;
  }
`;

export const ItemImg = styled.div`
  flex: 0 0 25%;
`;

export const ItemInfo = styled.div`
  flex: 0 0 50%;

  h3 {
    color: #222;
    font-size: 24px;
    text-align: left;
    margin-bottom: 15px;
  }

  p {
    color: #a4a4a4;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const ItemBtn = styled.div`
  flex: 0 0 25%;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    background-color: #00c165;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    font-size: 36px;
    transition: 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.03);
    }
  }
`;

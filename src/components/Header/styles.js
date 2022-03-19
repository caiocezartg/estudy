import styled from "styled-components";

export const HeaderContent = styled.header`
  background-color: #fff;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #4ecb71;
    font-size: 42px;
    font-style: italic;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  li a {
    display: inline-block;
    padding: 40px 35px;
    color: #4ecb71;
    font-weight: 500;
    transition: 0.3s color ease-in-out;

    &:hover,
    &:focus {
      color: #00914b;
    }

    &.active {
      color: #00914b;
      font-weight: 600;
      border-bottom: 6px solid #00914b;
    }

    .nav-icon {
      font-size: 24px;
      vertical-align: bottom;
      margin-right: 8px;
    }
  }
`;

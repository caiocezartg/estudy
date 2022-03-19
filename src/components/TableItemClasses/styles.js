import styled from "styled-components";

export const TableRow = styled.tr`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &:last-child {
    border-bottom: none;
  }

  td {
    flex: 0 0 25%;
    padding: 20px 0;
    position: relative;

    p {
      font-weight: 600;
      font-size: 20px;
    }

    &:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: #fff;
          background-color: #00c165;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          font-size: 24px;
          transition: 0.3s ease-in-out;

          &:hover {
            filter: brightness(0.9);
            transform: scale(1.03);
          }
        }

        span {
          margin-top: 10px;
          font-weight: 500;
        }

        input[type="checkbox"] {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          background-color: #e4e4e4;
        }

        button {
          background: transparent;
          border: none;
          cursor: pointer;
          width: 60px;
          height: 60px;

          .trash-icon {
            font-size: 42px;
            color: #f24e1e;
          }
        }
      }
    }
  }
`;

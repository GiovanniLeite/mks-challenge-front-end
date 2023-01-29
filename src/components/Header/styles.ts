import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100%;
  position: relative;
  z-index: 3;
`;

export const FixedHeader = styled.div`
  position: fixed;
  width: 100%;
`;

export const MainBar = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    height: 101px;

    div {
      input#check {
        display: none;
      }

      input#check:checked ~ div.sideBar {
        transform: translateX(-486px);
      }

      label#icon {
        cursor: pointer;
        position: absolute;
        width: 90px;
        height: 45px;
        border-radius: 8px;
        background-color: #fff;
        top: 29px;
        right: 88px;
        color: #000;
        font-weight: 700;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 3;

        svg {
          margin-right: 16px;
        }
      }

      div.sideBar {
        background: ${theme.colors.primary};
        box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
        height: 100vh;
        width: 486px;
        position: absolute;
        transition: all 0.2s linear;
        right: -486px;
        z-index: 2;
      }
    }

    a.home {
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      font-size: 40px;
      position: absolute;
      top: 28px;
      left: 65px;

      span {
        font-weight: 300;
        font-size: 20px;
      }
    }
  `}
`;

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

    @media only screen and (max-width: 710px) {
      height: 48px;
    }

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

        svg {
          margin-right: 16px;
        }

        @media only screen and (max-width: 710px) {
          width: 52px;
          height: 26px;
          top: 11px;
          right: 23px;
          font-weight: 700;
          font-size: 12px;
          justify-content: space-between;
          padding: 0 8px;

          svg {
            margin-right: 0;
            transform: scale(0.75);
          }
        }
      }

      div.sideBar {
        background-color: ${theme.colors.primary};
        box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
        height: 100vh;
        width: 486px;
        position: absolute;
        transition: all 0.2s linear;
        right: -486px;
        z-index: 2;

        @media only screen and (max-width: 710px) {
          width: 330px;
        }

        div.checkout {
          position: relative;
          height: 100%;
          z-index: 1;

          span.closeSideBar {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background-color: #000;
            color: #fff;
            font-size: 28px;
            font-weight: 400;
            position: absolute;
            top: 35px;
            right: 22px;

            z-index: 2;

            @media only screen and (max-width: 710px) {
              width: 46px;
              height: 46px;
              color: ${theme.colors.primary};
              font-size: 34px;
              font-weight: 500;
              top: 27px;
              right: 15px;
            }
          }

          div.info {
            padding: 35px 55px 0 50px;
            height: 100%;
            position: relative;
            z-index: 1;

            @media only screen and (max-width: 710px) {
              padding: 27px 46px 0 32px;
            }

            h3.title {
              color: #fff;
              font-weight: 700;
              font-size: 27px;
              max-width: 180px;
            }

            h3.total {
              color: #fff;
              font-weight: 700;
              font-size: 28px;
              position: absolute;
              left: 53px;
              bottom: 135px;
              width: calc(100% - 120px);
              display: flex;
              justify-content: space-between;

              @media only screen and (max-width: 710px) {
                left: 33px;
                bottom: 90px;
                width: calc(100% - 80px);
              }
            }
          }

          button.checkoutButton {
            cursor: pointer;
            color: #fff;
            border: none;
            width: 100%;
            padding: 21px 0;
            background-color: #000;
            text-align: center;
            font-weight: 700;
            font-size: 28px;
            position: absolute;
            left: 0;
            bottom: 0;

            z-index: 2;

            @media only screen and (max-width: 710px) {
              font-size: 20px;
            }
          }
        }
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

      @media only screen and (max-width: 710px) {
        font-size: 32px;
        top: 5px;
        left: 22px;

        span {
          font-size: 16px;
        }
      }
    }
  `}
`;

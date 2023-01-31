import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: 65px;
    overflow: auto;
    height: calc(100% - 315px);

    @media only screen and (max-width: 710px) {
      margin-top: 25px;
      height: calc(100% - 240px);
    }

    div.itemCart {
      position: relative;
      padding: 6px;
      padding-bottom: 28px;

      @media only screen and (max-width: 710px) {
        padding: 0;
        padding-bottom: 13px;
      }

      div.internalDiv {
        border-radius: 8px;
        background-color: #fff;
        padding: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media only screen and (max-width: 710px) {
          display: block;
          // padding: 23px;
        }

        div.itemImage {
          width: 60px;
          height: 60px;

          img {
            width: 100%;
            height: 60px;
            object-fit: contain;
          }

          @media only screen and (max-width: 710px) {
            height: 95px;
            width: 100%;
            margin-bottom: 15px;

            img {
              height: 95px;
              object-fit: contain;
            }
          }
        }

        h5 {
          font-weight: 400;
          font-size: 13px;
          color: #2c2c2c;
          max-width: 113px;

          @media only screen and (max-width: 710px) {
            font-size: 16px;
            max-width: none;
            margin-bottom: 14px;
          }
        }

        div.qty {
          width: 50px;
          color: #000;
          font-weight: 400;
          font-size: 5px;

          div.qtyButtons {
            border: 0.3px solid #bfbfbf;
            border-radius: 2px;
            margin-top: 4px;

            button {
              cursor: pointer;
              width: 16px;
              border: none;
              font-size: 8px;
              font-weight: 400;
              height: 19px;
              background-color: #fff;
            }

            input {
              width: 16px;
              border: none;
              font-size: 8px;
              font-weight: 400;
              height: 17px;
              text-align: center;
              border-left: 0.3px solid #bfbfbf;
              border-right: 0.3px solid #bfbfbf;
              color: #000;
            }
          }

          @media only screen and (max-width: 710px) {
            width: 98px;

            span.spanQty {
              display: none;
            }

            div.qtyButtons {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 3px;

              button {
                font-size: 24px;
                width: 32px;
                height: 34px;
              }

              input {
                font-size: 20px;
                width: 32px;
                height: 32px;
              }
            }
          }
        }

        p {
          font-weight: 700;
          font-size: 14px;
          color: #000;
          padding-top: 8px;

          @media only screen and (max-width: 710px) {
            float: right;
            padding: 8px;
            font-size: 15px;
            background-color: ${theme.colors.gray};
            color: #fff;
            border-radius: 5px;
            margin-top: -37px;
          }
        }
      }

      span.removeItem {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #000;
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        position: absolute;
        right: 0;
        top: 0;

        @media only screen and (max-width: 710px) {
          width: 27px;
          height: 32px;
          border-radius: 0;
          background-color: #fff;
          font-weight: 700;
          font-size: 27px;
          color: #000;
          right: 14px;
          top: 10px;
        }
      }
    }
  `}
`;

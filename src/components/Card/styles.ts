import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 11px;
    color: #2c2c2c;

    @media only screen and (max-width: 760px) {
      padding: 9px;
    }

    div.product {
      height: 100%;
      background-color: #fff;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
      border-radius: 8px;
      padding-top: 15px;
      position: relative;

      div.productImage {
        height: 138px;
        width: 100%;
        margin-bottom: 14px;

        img {
          width: 100%;
          height: 138px;
          object-fit: contain;
        }
      }

      div.namePrice {
        display: flex;
        justify-content: space-between;
        padding: 0 11px;
        margin-bottom: 8px;

        h5 {
          font-weight: 400;
          font-size: 16px;
          padding-right: 6px;
        }

        span {
          background-color: ${theme.colors.gray};
          border-radius: 5px;
          font-weight: 700;
          font-size: 15px;
          color: #fff;
          padding: 4px;
          max-height: 27px;
        }
      }

      p {
        padding: 0 11px;
        font-weight: 300;
        font-size: 10px;
        margin-bottom: 44px;
      }

      button {
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        color: #fff;
        background-color: ${theme.colors.primary};
        border: none;
        width: 100%;
        height: 32px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        bottom: 0;

        svg {
          margin-right: 14px;
        }
      }
    }
  `}
`;

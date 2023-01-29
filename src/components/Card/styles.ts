import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 11px;

  div.product {
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding-top: 15px;

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
      /*
      justify-content: center;
      align-items: center; */
      /* overflow: hidden; */
      padding: 0 11px;

      h5 {
        /// float: left;
        font-weight: 400;
        font-size: 16px;
        padding-right: 6px;
      }

      span {
        ///float: right;
        background-color: #373737;
        border-radius: 5px;
        font-weight: 700;
        font-size: 15px;
        color: #fff;
        padding: 4px;
        max-height: 27px;
      }
    }
  }
`;

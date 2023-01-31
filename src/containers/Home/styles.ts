import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  padding: 206px 62px 161px 62px;
  background-color: #f9f9f9;

  @media only screen and (max-width: 830px) {
    padding: 150px 62px 150px 62px;
  }

  @media only screen and (max-width: 710px) {
    padding: 57px 62px 29px 62px;
  }

  @media only screen and (max-width: 580px) {
    padding: 57px 30px 29px 30px;
  }

  @media only screen and (max-width: 490px) {
    padding: 57px 62px 29px 62px;
  }

  @media only screen and (max-width: 490px) {
    padding: 57px 62px 29px 62px;
  }

  @media only screen and (max-width: 365px) {
    padding: 57px 40px 29px 40px;
  }

  section.ProductGrid {
    margin: 0 auto;
    max-width: 966px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;

    @media only screen and (max-width: 920px) {
      grid-template-columns: 33% 33% 33%;
    }

    @media only screen and (max-width: 710px) {
      grid-template-columns: 50% 50%;
    }

    @media only screen and (max-width: 490px) {
      grid-template-columns: 100%;
    }
  }
`;

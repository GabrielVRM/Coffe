import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;

  justify-content: space-between;
  padding: 2rem 10rem;
  width: 100%;
  height: 104px;

  img {
    height: 40px;
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;

    gap: 2rem;

    .location {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      border-radius: 8px;
      background-color: ${(props) => props.theme.productPurpleLight};

      color: ${(props) => props.theme.productPurpleDark};
    }
  }
  .checkout a {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;

    padding: 0.5rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.productYellowLight};
    color: ${(props) => props.theme.productYellowDark};
  }
  .quantity {
    position: absolute;
    height: 1rem;
    padding: 0 0.5rem 1.3rem 0.5rem;
    margin-top: calc(0px - 1.2rem);
    margin-right: calc(0px - 1.6rem);
    border-radius: 1000px;

    background: ${(props) => props.theme.productYellowDark};
    color: white;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  width: 16rem;
  padding: 2rem;

  text-align: center;
  background: ${(props) => props.theme.baseCard};
  border-radius: 10px;

  span {
  }

  img {
    margin: 0 auto;
    margin-top: calc(0px - 3.5rem);
    width: 7rem;
  }
  h2 {
    font-size: large;
  }
  p {
    width: 14rem;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  .amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-child(1) {
      font-size: 1.4rem;
    }
    span:nth-child(2) {
      font-size: 1.4rem;
    }
    span:nth-child(3) {
      font-size: 1.2rem;
    }
    span:nth-child(4) {
      font-size: 1.4rem;
    }
  }
  .icon {
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme.productPurpleDark};
    color: ${(props) => props.theme.background};
    border: none;
    cursor: pointer;

    a {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 8px;
      background: ${(props) => props.theme.productPurpleDark};
      color: ${(props) => props.theme.background};
      border: none;
      cursor: pointer;
      color: ${(props) => props.theme.background};
      padding: 0rem;
    }
  }
  .quatity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem;
    height: 3.5rem;
    gap: 20px;
    margin: 0 auto;
    border-radius: 8px;
    background: ${(props) => props.theme.baseButton};
    .btn {
      border: none;
      background: inherit;
      color: ${(props) => props.theme.productPurpleDark};
      cursor: pointer;
    }

    span {
      align-items: center;
    }
  }
`;

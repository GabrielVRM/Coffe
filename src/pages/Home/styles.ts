import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 544px;

  align-items: center;
  justify-content: center;
  gap: 4rem;

  padding: 2rem;

  div:nth-child(1) {
    width: 36.75rem;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 4rem;
    }
    div {
      width: inherit;
      display: grid;
      margin: 1rem 0;
      grid-template-columns: auto auto;

      span {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  img {
    width: 30.5rem;
    height: auto;
  }
`;
export const ContainerCoffee = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .title-Coffee {
    width: 70rem;
    h1 {
      margin-bottom: 2rem;
    }
  }
  .coffees {
    display: grid;
    margin-top: 2rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: 100%;

  h1 {
    margin-top: 4rem;
    color: ${(props) => props.theme.productYellowDark};
    margin-left: 20rem;
    display: flex;
    justify-content: start;
  }

  p {
    margin-left: 20rem;
    display: flex;
    justify-content: start;
  }

  .content {
    margin-top: 2rem;
    margin-left: 4rem;

    display: flex;
    justify-content: center;
    gap: 18rem;

    .info {
      border: 2px solid #dbac2c;
      border-top-right-radius: 25px;
      border-bottom-left-radius: 25px;
      padding: 2rem;
    }
    .info div {
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .info div .map {
      display: flex;
      background: #4b2995;

      border-radius: 100%;
      padding: 0.3rem;
    }
    .info div .timer {
      display: flex;

      background: #dbac2c;
      border-radius: 100%;
      padding: 0.3rem;
    }
    .info div .current {
      display: flex;

      background: #c47f17;
      border-radius: 100%;

      padding: 0.3rem;
    }
  }
`;

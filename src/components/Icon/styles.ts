import styled from "styled-components";

type ColorType =
  | "productYellow"
  | "productPurpleDark"
  | "baseText"
  | "productYellowDark";

export const Container = styled.div<{ color: ColorType }>`
  display: flex;
  width: auto;

  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.background};
  padding: 0.5rem;

  border-radius: 1000px;
`;

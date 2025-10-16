import { Container } from "./styles";

interface IconTypes {
  color?:
    | "productYellow"
    | "productPurpleDark"
    | "baseText"
    | "productYellowDark";
  Icon: React.ElementType;
}
export function Icon({ color = "productYellowDark", Icon }: IconTypes) {
  return (
    <>
      <Container color={color}>
        <Icon size={20} />
      </Container>
    </>
  );
}

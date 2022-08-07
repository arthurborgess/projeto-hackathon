import { Container } from "./styles";

interface ItemProps {
  name: string;
}

export function Item({ name }: ItemProps) {

  return (
    <Container>{name}</Container>
  )
}
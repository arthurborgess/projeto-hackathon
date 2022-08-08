import { Container } from "./styles";

interface ItemProps {
  name: string;
}

export function Item({ name }: ItemProps) {

  return (
    <Container>
      {name.length > 7 ? (
       <span>{name.slice(0, 8)}...</span>  
      ) : ( 
        name
      )}
    </Container>
  )
}
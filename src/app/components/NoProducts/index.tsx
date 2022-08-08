import { NoProductsWrapper } from "./styled";
import { NotInterested } from '@styled-icons/material/NotInterested'

type NoProductsProps = {msg: string}

export function NoProducts({msg}: NoProductsProps){
  return(
    <NoProductsWrapper>
      <p>{msg}</p>
      <NotInterested/>
    </NoProductsWrapper>
  )
}
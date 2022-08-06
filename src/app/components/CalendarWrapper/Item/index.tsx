import { useEffect } from "react";
import { ProductRecord } from "../../../types/Record"

interface ItemProps{
  name: string;
}

export function Item({name}:ItemProps){

  return(
    <div>{name}</div>
  )
}
import { Column } from "./Column";
import { Wrapper } from "./styled";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";;

export function CalendarWrapper (){

  const { columnsData } = useContext(ProductContext)
  useEffect(() => {
  },[columnsData])

  return (
    <Wrapper>
      {columnsData === null ? (
        <div>Carregando</div>
      ) : (
        columnsData?.map((column, index) => (
          <Column productsPerDay={column} key={index + "column_per_date"}/>
        ))
      )}

    </Wrapper>
    )
}
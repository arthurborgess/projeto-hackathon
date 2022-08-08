import { Column } from "./Column";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";
import { CreateProductContext } from "../../contexts/Products/CreateProductProvider "
import { Title, Wrapper, WrapperColumns } from "./styled";
import { Loader } from "../Loader";


export function CalendarWrapper (){

  const { isLoading } = useContext(CreateProductContext)
  const { columnsData, loading } = useContext(ProductContext)
  useEffect(() => {
  },[columnsData])

  if(loading){
    return (
      <Loader size={300}/>
    )
  }


  return (
    <Wrapper>
      <Title>Calendário de Compras</Title>
    <WrapperColumns> 
      { columnsData?.map((column, index) => (
          <Column productsPerDay={column} key={index + "column_per_date"}/>
        ))}
       
    </WrapperColumns>
    </Wrapper>
    )
}
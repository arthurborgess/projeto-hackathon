import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import React from 'react'
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/Products/ProdcutsProvider";
import { ListPerDayTypes, ProductRecord } from "../../../types/Record";
import { Item } from "../Item";


interface ColumnProps{
  date: Date; 
}

export function Column({date}:ColumnProps) {  


  const {lists} = useContext(ProductContext)
  const [myDate, setMyDate] = useState<ListPerDayTypes | null>(null)

  useEffect(() => {
      lists?.map( list => {
        if(format(date, 'dd MMM yyy',{locale: pt})  === format(list.date, 'dd MMM yyy',{locale: pt})){
          setMyDate(list)
        } 
      })
  },[lists])

  return (
    <>
    {!lists ? (
    <div>loading</div>
    ) : (
      <div>{format(date, "dd MMM yyy", {locale: pt})}
        {myDate ? (
          myDate.Data?.map( date => (
            <Item name={date.product.nome}/>
          ))
        ) : (
          <div>nao existe</div>
        )}

      </div>
    )}
    </>
  )
}
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import React from 'react'
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../contexts/Products/ProdcutsProvider";
import { getCurrentDayList } from '../../../helpers/callendar';
import { ListPerDayTypes, ProductRecord } from "../../../types/Record";
import { Item } from "../Item";


interface ColumnProps{
  productsPerDay: ListPerDayTypes; 
}

export function Column({productsPerDay}:ColumnProps) {  
  return (
    <div>
      {format(productsPerDay.date, "dd MM yyyy")}
      {productsPerDay.Data?.map( Data =>( 
        <Item key={Data.id} name={Data.product.nome} />
      ))}

    </div>
  )
}
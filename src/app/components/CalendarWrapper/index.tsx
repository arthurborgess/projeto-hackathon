import { addDays, format } from "date-fns";
import { useContext, useState } from "react"
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";
import { getCalendarDays } from "../../helpers/nextOcurrenceDay";
import { ProductRecord } from "../../types/Record";
import { Column } from "./Column";
import { Wrapper } from "./styled";

interface CalendarProps {
  dateArray: Date[]
  allProducts: ProductRecord[] | null;
}

export function CalendarWrapper ({allProducts, dateArray}:CalendarProps){

  return (
    <Wrapper>
      {dateArray.map((day, index) => (
        <Column
          allProducts={allProducts} 
          date={day} key={index + day.toString()} />
      ))}
    </Wrapper>
    )
}
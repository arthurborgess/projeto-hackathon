import { addDays, format } from "date-fns";
import { useContext, useEffect } from "react";
import { ProductContext } from "../../contexts/Products/ProdcutsProvider";
import { ProductRecord } from "../../types/Record";
import { Column } from "./Column";
import { Wrapper } from "./styled";

interface CalendarProps {
  dateArray: Date[]
}

export function CalendarWrapper ({dateArray}:CalendarProps){
  return (
    <Wrapper>
      {dateArray.map( (date, index) => (
        <Column date={date} key={index + "date" + "column"}/>
      ))}
    </Wrapper>
    )
}
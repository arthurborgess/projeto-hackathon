import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useContext, useEffect, useState } from "react";
import { CreateProductContext } from "../../../contexts/Products/CreateProductProvider ";
import { getEndDate } from "../../../helpers/nextOcurrenceDay";

interface InputAfterProps {
  onClick: React.MouseEventHandler<HTMLInputElement>;
}


export const InputAfter = ({onClick}:InputAfterProps) => {
  
  const [ period, setPeriod ] = useState<number | "">("")
  const { weekDays, endDate, setEndDate, initialDate, repeatPattern, typeEnd } = useContext(CreateProductContext)

  useEffect(() => {
    typeEnd === "after" ? setPeriod(0) : setPeriod("")
  },[typeEnd])

  function handleSelecEndPeriod(event: React.ChangeEvent<HTMLInputElement>){
    const actualPeriod = event.target.valueAsNumber
    if(actualPeriod <= 0 || actualPeriod.toString() === "NaN" || actualPeriod.toString() === ""){
      setPeriod(0)
      setEndDate(null)
      return
    }

    if(actualPeriod > 10 && repeatPattern.type === "ano") return
    if(actualPeriod > 10 && repeatPattern.type === "ano") return
    if(actualPeriod > 100) return

    if(weekDays.realInitialDate !== null){
      const endDate = getEndDate(weekDays.realInitialDate, repeatPattern.type, repeatPattern.frequency , actualPeriod )      
      setEndDate(endDate)
    }else{
      const endDate = getEndDate(initialDate, repeatPattern.type, repeatPattern.frequency , actualPeriod )      
      setEndDate(endDate)
    }
    setPeriod(actualPeriod)
  } 
  
  return (
    <div>
    <input
      type={"radio"}
      name="selectPattern"
      onClick={onClick}
    />
    <label htmlFor="option">Após</label>
    
    <input 
      type="number" 
      placeholder="0 - 100"
      onChange={(e) => handleSelecEndPeriod(e)}
      value={period}
      disabled={typeEnd !== "after" && true}
    /> 
    <span>
      Periodos
    </span>
    
    {endDate !== null && typeEnd === "after" && (
      <p>Este produto nao será adicionado as suas listas de compras a partir do dia: 
        {format(endDate, "dd MMM yyyy", {locale: ptBR})}
      </p>
    )}
  </div>
  )
}
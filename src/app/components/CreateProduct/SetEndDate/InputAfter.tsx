import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useContext, useEffect, useState } from "react";
import { CreateProductContext } from "../../../contexts/Products/CreateProductProvider ";
import { getEndDate } from "../../../helpers/nextOcurrenceDay";
import { Alert, InputFrequency, Wrapper, WrapperInputLabel } from "./styled";

interface InputAfterProps {
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

export const InputAfter = ({onClick}:InputAfterProps) => {
  
  const [ period, setPeriod ] = useState<number | "">("")
  const { weekDays, endDate, setEndDate, initialDate, repeatPattern, typeEnd } = useContext(CreateProductContext)

  useEffect(() => {
    typeEnd === "after" ? setPeriod(0) : setPeriod("")
  },[typeEnd])

  useEffect(() => {
    setEndDate(null)
    setPeriod("")
  },[repeatPattern , weekDays])

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
    <>
    <Wrapper>
      <WrapperInputLabel>
        <input
          type={"radio"}
          name="selectPattern"
          onClick={onClick}
          radioGroup="selectPattern"
        />
        <label htmlFor="option">Após:</label>
      </WrapperInputLabel>
    
    <InputFrequency 
      type="number" 
      placeholder="0 - 100"
      onChange={(e) => handleSelecEndPeriod(e)}
      value={period}
      disabled={typeEnd !== "after" && true}
    /> 
    <span>
      Periodos
    </span>
  </Wrapper>
  
  {endDate !== null && typeEnd === "after" && (
      <Alert>Este produto nao será adicionado as suas listas de compras a partir do dia: <br/>
        <span>{format(endDate, "dd MMM yyyy", {locale: ptBR})}</span>
      </Alert>
    )}
  </>
  )
}
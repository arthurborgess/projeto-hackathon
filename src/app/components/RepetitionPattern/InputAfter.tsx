import { format } from "date-fns";
import React, { Dispatch, SetStateAction } from "react";

import { SelectPatternTypes } from './index'

interface InputAfterProps {
  endPeriodDate: Date | null;
  pattern: SelectPatternTypes;
  period: number | undefined;
  setPattern: React.MouseEventHandler<HTMLInputElement>;
  setEndDate: ( value: React.SetStateAction<Date | null>) =>  void;
  setPeriod: React.Dispatch<React.SetStateAction<number>>; 
}


export const InputAfter = ({period, endPeriodDate, pattern, setPattern, setEndDate, setPeriod}:InputAfterProps) => {

  function handleSelecEndPeriod(period: number){
    const endDate = new Date()
    endDate.setDate( new Date().getDate() + period * 7)
    
    setPeriod(period)
    setEndDate(endDate)
  } 

  return (
    <div>
    <input 
      type={"radio"} 
      name="selectPattern"
      onClick={setPattern}
    />
    <label htmlFor="option">Após</label>
    
    <input 
      type="number" 
      max={23} 
      min={1}
      onChange={(e) => handleSelecEndPeriod(e.target.valueAsNumber)}
      value={period}
      disabled={pattern !== "after" && true}
    /> 
    <span>
      Periodos
    </span>
    
    {endPeriodDate !== null && pattern === "after" && (
      <p>Este produto nao será adicionado as suas listas de compras a partir do dia: {
      format(endPeriodDate, "dd MMM yyyy")}
      </p>
    )}
  </div>
  )
}
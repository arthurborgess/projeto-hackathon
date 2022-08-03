import React from "react";
import DatePiker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt';
import { SelectPatternTypes } from './index'

import 'react-datepicker/dist/react-datepicker.css' 

registerLocale('pt', pt)

interface InputInProps {
  endDate: Date | null;
  setPattern: React.MouseEventHandler<HTMLInputElement>;
  setDate: ( value: React.SetStateAction<Date | null>) =>  void;
  selectedPattern: SelectPatternTypes
}

export const InputIn = ({selectedPattern, endDate, setPattern, setDate}: InputInProps) => {
  
    const maxDate = new Date()
    maxDate.setDate(new Date().getDate() + 2920)
  
  return(
    <div>
    <input 
      type={"radio"} 
      name="selectPattern"
      onClick={setPattern}
      id="input-in"
    />
    <label htmlFor="input-in">Em:</label>
    
    <DatePiker 
      startDate={new Date()}
      maxDate={maxDate}
      minDate={new Date()}
      selected={endDate} 
      onChange={date => setDate(date)}
      
      showYearDropdown
      dateFormat={"dd MMM. yyyy"}
      locale="pt"
      dropdownMode="select"
      
      disabled={selectedPattern !== "in" && true}  
      onKeyDown={(e) => e.preventDefault()}
    />
  </div>
  )
}
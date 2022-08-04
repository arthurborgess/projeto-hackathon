import { useContext } from "react";
import DatePiker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt';

import 'react-datepicker/dist/react-datepicker.css' 
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CreateProductContext } from "../../../contexts/CreateProductProvider ";

registerLocale('pt', pt)

interface InputInProps {
  onClick: React.MouseEventHandler<HTMLInputElement>
}

export const InputIn = ({onClick}:InputInProps) => {

  const {weekDays ,initialDate, typeEnd, endDate, setEndDate  } = useContext(CreateProductContext)

  const maxDate = new Date()
  maxDate.setDate(new Date().getDate() + 2920)
  
  return(
    <div> 
    <input 
      type={"radio"} 
      name="selectPattern"
      onClick={onClick}
      id="input-in"
    />
    <label htmlFor="input-in">Em:</label>
    
    <DatePiker 
      maxDate={maxDate}
      minDate={weekDays.realInitialDate !== null? weekDays.realInitialDate : initialDate }
      startDate={weekDays.realInitialDate !== null? weekDays.realInitialDate : initialDate }
      selected={typeEnd === "in" && endDate !== null ? endDate : undefined} 
      onChange={ date => setEndDate( date !== null ?  date : null)}

      placeholderText={format(initialDate, "dd MMM. yyyy",{locale: ptBR})}
      
      showYearDropdown
      dateFormat={"dd MMM. yyyy"}
      locale="pt"
      dropdownMode="select"
      
      disabled={typeEnd !== "in" && true}  
      onKeyDown={(e) => e.preventDefault()}
    />
  </div>
  )
}
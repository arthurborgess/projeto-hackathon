import { useContext } from 'react';
import { CreateProductContext } from '../../../contexts/Products/CreateProductProvider ';

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import pt from 'date-fns/locale/pt';

import DatePiker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css' 
import { Wrapper } from './styled';

registerLocale('pt', pt)

export const SetInitialDate = () => {

  const { initialDate, setInitialDate } = useContext(CreateProductContext)
  
  function handleSetData(date: Date | null){
    const InitDate = date !== null ? date : new Date()
    setInitialDate(InitDate) 
  } 

  return (
    <Wrapper>
      <p>Iniciar dia: </p>
      <DatePiker 
        className='date-piker'
        startDate={new Date()}
        minDate={new Date()}
        selected={initialDate} 
        onChange={ date => handleSetData(date)}

        placeholderText={format(new Date(), "dd MMM. yyyy",{locale: ptBR})}
      
      showYearDropdown
      dateFormat={"dd MMM. yyyy"}
      locale="pt"
      dropdownMode="select"
  
      onKeyDown={(e) => e.preventDefault()}
    />
  </Wrapper>
  )
}
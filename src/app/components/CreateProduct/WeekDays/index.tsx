import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useContext } from "react"
import { CreateProductContext } from "../../../contexts/Products/CreateProductProvider "
import { getNextOcurrencyDay } from "../../../helpers/nextOcurrenceDay"
import { Alert, Day, DaysWrapper, Wrapper } from "./styled"

export const WeekDays = () => {
  
  const { setWeekDays, weekDays, initialDate } = useContext(CreateProductContext)
  const days = ["d", "s", "t", "q", "q", "s", "s"]
  
  function handleSelectDay(day: number){  
    const {days, realInitialDate} = getNextOcurrencyDay(weekDays.days, initialDate, day)
    setWeekDays(prevState => ({
      ...prevState,
      realInitialDate: realInitialDate,
      days: days
    }))
  }

  function verifyIsSelected(dayNumber: number){
    const isSelected = weekDays.days.indexOf(dayNumber) === -1 ? "" : "selected" 
    return isSelected
  }

  return (
    <Wrapper>
      <p>Repetir:</p>
      <DaysWrapper>
        {days.map((day, index) => (
          <Day
            onClick={() => handleSelectDay(index)}
            className={verifyIsSelected(index)}
            key={"WeekDay" + index + day}
          >
            {day}
          </Day>
        ))}
      </DaysWrapper>

      {weekDays.realInitialDate !== null && (
      <Alert>Estará disponivel nas listas a partir do dia: <br/>
        <span> {format(weekDays.realInitialDate , "dd MMM. yyyy", {locale: ptBR})}</span>
      </Alert>
      )}
    </Wrapper>
  )
}
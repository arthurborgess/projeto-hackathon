import { useState } from "react"
import { Day, DaysWrapper } from "./styled"

export const SelectDayWeek = () => {
  
  const weekDays = ["d", "s", "t", "q", "q", "s", "s"]
  const [ selectedDay, setSelectedDay ] = useState<number | null>(null)

  return (
    <div>
      <p>Repetir:</p>
      <DaysWrapper>
        {weekDays.map((day, index) => (
          <Day
            onClick={() => setSelectedDay(index)}
            className={index === selectedDay ? "selected" : ""}
            key={"WeekDay" + index + day}
          >
            {day}
          </Day>
        ))}
      </DaysWrapper>
    </div>
  )
}
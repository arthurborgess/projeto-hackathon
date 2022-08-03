import { useState } from "react"
import { InputIn } from './InputIn';
import { InputAfter } from "./InputAfter";

export type SelectPatternTypes = "never" | "in" | "after"

export const RepetitionPattern = () => {
 
  const [ endDate, setEndDate ] = useState<Date | null>(new Date())
  const [ pattern, setPattern] = useState<SelectPatternTypes>("never")
  const [ period, setPeriod ] = useState<number>(0) 
  const [ endPeriodDate, setEndPeriodDate ] = useState<Date | null>(null)

  console.log(endDate, pattern, period, endPeriodDate)


  return (
    <div>
      <p>Termina em</p>

      <div>
        <input type={"radio"} name="selectPattern"
          onClick={() => setPattern("never")}
        />
        <label htmlFor="">Nunca</label>

      </div>

      <InputIn 
        endDate={endDate} 
        selectedPattern={pattern} 
        setPattern={() => setPattern('in')} 
        setDate={setEndDate}
      />

      <InputAfter
        pattern={pattern}
        setPattern={() => setPattern('after')}
        period={period}
        setPeriod={setPeriod}
        setEndDate={setEndPeriodDate}
        endPeriodDate={endPeriodDate}
      />
    </div>
  )
}
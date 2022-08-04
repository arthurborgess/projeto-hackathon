import { createContext, ReactNode, useEffect, useState } from "react";
import { GetAndSeterProductData, RepeatPatternInterface, typeEndOption, weekDaysTypes } from "../../types/Product";


interface ProducContextProviderProps {
  children: ReactNode
}

export const CreateProductContext = (createContext({} as GetAndSeterProductData ))

export function CreateProdcutProvider ({children}: ProducContextProviderProps){

  const [ itemName, setItemName ] = useState<string>("")
  const [ repeatPattern, setRepeatPattern ] = useState<RepeatPatternInterface>({
    frequency: 1,
    type: "dia"
  })
  const [ weekDays, setWeekDays ] = useState<weekDaysTypes>({days: [], realInitialDate: null})
  const [ initialDate, setInitialDate ] = useState<Date>(new Date)
  const [ endDate, setEndDate ] = useState<Date | null>(null)
  const [ typeEnd, setTypeEnd ] =  useState<typeEndOption>('never')

  useEffect(() => {
    setEndDate(null)
    setWeekDays({
      days: [],
      realInitialDate: null
    })
  },[initialDate, typeEnd, repeatPattern.type])

  useEffect(() => {
    setEndDate(null)
    setWeekDays(prevState => ({
      ...prevState,
      realInitialDate: null
    }))
  },[repeatPattern.type])

  const contextValue = { 
    itemName, 
    setItemName,
    typeEnd, 
    setTypeEnd,
    initialDate, 
    setInitialDate,
    endDate,
    setEndDate,
    repeatPattern,
    setRepeatPattern,
    weekDays, 
    setWeekDays
  }

  return (
    <CreateProductContext.Provider value={contextValue}>
      {children}
    </CreateProductContext.Provider>
  )
}
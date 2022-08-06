import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { GetAndSeterProductData, RepeatPatternInterface, typeEndOption, weekDaysTypes } from "../../types/Product";
import { useApi } from "../../hooks/useApi";
import { getUnixTime } from "date-fns";
import { User } from "../../types/User";



interface ProducContextProviderProps {
  children: ReactNode
}

export const CreateProductContext = (createContext({} as GetAndSeterProductData))

export function CreateProdcutProvider({ children }: ProducContextProviderProps) {

  const { createProduct } = useApi()

  const [err, setErr] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [itemName, setItemName] = useState<string>("")
  const [repeatPattern, setRepeatPattern] = useState<RepeatPatternInterface>({
    frequency: 1,
    type: "dia"
  })
  const [weekDays, setWeekDays] = useState<weekDaysTypes>({ days: [], realInitialDate: null })
  const [initialDate, setInitialDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(null)
  const [typeEnd, setTypeEnd] = useState<typeEndOption>('never')

  useEffect(() => {
    setEndDate(null)
    setWeekDays({
      days: [],
      realInitialDate: null
    })
  }, [initialDate, typeEnd, repeatPattern.type])

  useEffect(() => {
    setEndDate(null)
    setWeekDays(prevState => ({
      ...prevState,
      realInitialDate: null
    }))
  }, [repeatPattern.type, initialDate])

  function getLoading(loading: boolean) {
    setIsLoading(loading)
  }

  function getErr(Err: any) {
    setErr(Err)
  }


  const handleCreateProduct = (user: User | null) => {
    
    createProduct(getLoading, getErr, user, {
      nome: itemName,
      tipo_de_repeticao: repeatPattern.type,
      frequencia_da_repeticao: repeatPattern.frequency,
      repete_nos_dias: weekDays.days.toString(),
      encerramento: endDate === null ? 0 : getUnixTime(endDate),
<<<<<<< HEAD
      data_criacao: weekDays.realInitialDate === null ? getUnixTime(new Date()) : getUnixTime(weekDays.realInitialDate),
      data_primeira_ocorrencia: weekDays.realInitialDate === null ? 0 : getUnixTime(weekDays.realInitialDate) 
=======
      data_criacao: getUnixTime(new Date()),
      data_primeira_ocorrencia: weekDays.realInitialDate === null ? 0 : getUnixTime(weekDays.realInitialDate)
>>>>>>> d1cdfda6807de0072561b78471b20d31fe8eb87c
    })
  }

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
    setWeekDays,
    handleCreateProduct,
    err,
    isLoading
  }

  return (
    <CreateProductContext.Provider value={contextValue}>
      {children}
    </CreateProductContext.Provider>
  )
}
import { createContext, ReactNode, useEffect, useState } from "react";
import { GetAndSeterProductData, RepeatPatternInterface, typeEndOption, weekDaysTypes } from "../../types/Product";

import { useApi } from "../../hooks/useApi";
import { getUnixTime } from "date-fns";


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
  const [initialDate, setInitialDate] = useState<Date>(new Date)
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

  // useEffect(() => {
  //   console.log(weekDays.realInitialDate)
  //   console.log("status de erro: " , err)
  // }, [err])

  function getLoading(loading: boolean) {
    setIsLoading(loading)
  }

  function getErr(Err: any) {
    setErr(Err)
  }

  const handleCreateProduct = () => {

    console.log(createProduct(getLoading, getErr, "0277a69cf889d21e9614966db20e858a", {
      nome: itemName,
      tipo_de_repeticao: repeatPattern.type,
      frequencia_da_repeticao: repeatPattern.frequency,
      repete_nos_dias: weekDays.days.toString(),
      encerramento: endDate === null ? 0 : getUnixTime(endDate),
      data_criacao: getUnixTime(new Date()),
      data_primeira_ocorrencia: weekDays.realInitialDate === null ? 0 : getUnixTime(weekDays.realInitialDate)
    }))
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
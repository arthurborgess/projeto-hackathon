import { createContext, ReactNode, useEffect, useState } from "react";
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

    if(itemName === ""){
      setErr("O nome do produto é obrigatório")
      return
    }

    if(typeEnd !== "never"){
      if(endDate === null){
        setErr("Por favor insira uma data final")
        return
      }
    }
    if(repeatPattern.type === "semana"){
      if(weekDays.days.length === 0){
        setErr("Por favor selecione os dias da semana")
        return  
      }
    }
    
    createProduct(getLoading, getErr, user, {
      nome: itemName,
      tipo_de_repeticao: repeatPattern.type,
      frequencia_da_repeticao: repeatPattern.frequency,
      repete_nos_dias: weekDays.days.toString(),
      encerramento: endDate === null ? 0 : getUnixTime(endDate),
      data_criacao: weekDays.realInitialDate === null ? getUnixTime(initialDate) : getUnixTime(weekDays.realInitialDate),
      data_primeira_ocorrencia: weekDays.realInitialDate === null ? 0 : getUnixTime(weekDays.realInitialDate) 
    })
    setItemName("")
    setEndDate(null)
    setWeekDays({
      days: [],
      realInitialDate: null
    })
    setRepeatPattern({
      frequency: 1,
      type: "dia"
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
    setErr,
    isLoading
  }

  return (
    <CreateProductContext.Provider value={contextValue}>
      {children}
    </CreateProductContext.Provider>
  )
}
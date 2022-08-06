import { addDays } from "date-fns/esm";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { listGenerator } from "../../helpers/gerenatesLists";
import { useApi } from "../../hooks/useApi";
import { ListPerDayTypes, ProductProviderTypes, ProductRecord } from "../../types/Record";
import { User } from "../../types/User";

interface ProductProviderProps {
  children: ReactNode
}

export const ProductContext = (createContext({} as ProductProviderTypes))

export function ProdcutProvider({ children }: ProductProviderProps){

  const api = useApi()
  const [ allProducts, setAllProducts ] = useState<ProductRecord[] | null>(null)
  const [ loading, setLoading] = useState<boolean>(false)
  const [ numberOfViews, setNumberOFViews ] = useState<number>(7)
  const [ startDate, setStartDate ] = useState<Date>(new Date())
  const [ lists, setLists ] = useState<ListPerDayTypes[]>()

  const loadProducts = (user:User | null, numberOfViews: number) => {
    setLoading(true)    
    api.getProducts(user, numberOfViews).then(records => {
        setAllProducts(records)
      }).finally(() => {
        setLoading(false);
      })
    }

  useEffect(() => {
    const currentList = listGenerator(allProducts, numberOfViews, startDate)
    setLists(currentList)
  },[allProducts])

  useEffect(() => {
    const currentList = listGenerator(allProducts, numberOfViews, startDate)
    setLists(currentList)
    console.log(currentList)
    console.log(startDate)
  },[startDate, numberOfViews])

  const contextValue = {
    allProducts,
    loading,
    loadProducts,
    numberOfViews,
    setNumberOFViews,
    setLists,
    lists,
    startDate, 
    setStartDate
  }

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

import { createContext, ReactNode, useEffect, useState } from "react";
import { createColumnsData } from "../../helpers/callendar";
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
  const [ numberOfColumns, setNumberOfColumns ] = useState<number>(7)
  const [ startDate, setStartDate ] = useState<Date>(new Date())
  const [ columnsData , setColumnsData ] = useState<ListPerDayTypes[]>()

  const loadProducts = (user:User | null, numberOfViews: number) => {
    setLoading(true)    
    api.getProducts(user, numberOfViews).then(records => {
        setAllProducts(records)
      }).finally(() => {
        setLoading(false);
      })
    }

  useEffect(()=> {
    if(allProducts !== null){
      const actualColumns = createColumnsData(allProducts,startDate, numberOfColumns)
      setColumnsData(actualColumns)
    }
  },[allProducts])

  useEffect(() => {
    if(allProducts !== null){
      const actualColumns = createColumnsData(allProducts,startDate, numberOfColumns)
      setColumnsData(actualColumns)
    }
  },[numberOfColumns, startDate])

  const contextValue = {
    allProducts,
    loading,
    loadProducts,
    numberOfColumns, 
    setNumberOfColumns,
    columnsData , 
    setColumnsData,
    startDate, 
    setStartDate
  }

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { ProductProviderTypes, ProductRecord } from "../../types/Record";
import { User } from "../../types/User";

interface ProductProviderProps {
  children: ReactNode
}

export const ProductContext = (createContext({} as ProductProviderTypes))

export function ProdcutProvider({ children }: ProductProviderProps){

  const api = useApi()
  const [ allProducts, setAllProducts ] = useState<ProductRecord[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const loadProducts = (user:User | null, numberOfViews: number) => {
    setLoading(true)    
    api.getProducts(user, numberOfViews).then(records => {
        setAllProducts(records)
      }).finally(() => {
        setLoading(false);
      })
    }

  const contextValue = {
    allProducts,
    loading,
    loadProducts
  }

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

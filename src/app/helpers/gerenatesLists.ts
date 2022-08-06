import { add, addDays, eachDayOfInterval, format, fromUnixTime } from "date-fns";
import { pt } from "date-fns/locale";
import { ListPerDayTypes, ProductRecord } from "../types/Record";

export function listGenerator(allProducts: ProductRecord[] | null, numberOfDaysAfter: number, setDate:Date){
  if(!allProducts || allProducts === undefined) return 
  
  let firstOcurrencyDate = fromUnixTime(allProducts[0].product.data_criacao) 
  allProducts.map(product => {
    if(fromUnixTime(product.product.data_criacao) < firstOcurrencyDate){
      firstOcurrencyDate = fromUnixTime(product.product.data_criacao)
    }
  })

  const realInitialDate = addDays(setDate, numberOfDaysAfter)

  // let initalDate = firstDateToFatch? firstDateToFatch : 
  const list: ListPerDayTypes[] = []
  const firstOcurrencyToNowInterval = eachDayOfInterval({start: firstOcurrencyDate, end: realInitialDate}).length
  const startDate = firstOcurrencyToNowInterval > 60 ? addDays(realInitialDate, - 60) : addDays(realInitialDate, - firstOcurrencyToNowInterval) 
  const limitFecthData = firstOcurrencyToNowInterval > 60 ? 60 : 300 
  let i = 0
  while(i < limitFecthData){
    let arrData: ProductRecord[] = [] 
    allProducts.map(product => {
      if(product.product.dias_em_listas === "every" && fromUnixTime(product.product.data_criacao) < addDays(startDate, i)){
        arrData.push({id: product.id, product:product.product })
      }else{
        if(product.product.dias_em_listas !== "every"){
          product.product.dias_em_listas?.map( dia => {
            if(dia < addDays(startDate, numberOfDaysAfter)){
              if(format(dia, 'dd MMM yyy',{locale: pt})  === format(addDays(startDate, i), 'dd MMM yyy',{locale: pt})){
                arrData.push({id: product.id, product:product.product })
              } 
            }
          })
        }
      }
    })
    list.push({date: addDays(startDate, i), Data: arrData })
    i++
  }

  return list
}
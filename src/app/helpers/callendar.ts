import { addDays, addWeeks, addMonths, addYears, fromUnixTime, format } from "date-fns"
import { pt } from "date-fns/locale"
import { FrequencyTypes } from "../types/Product"
import { ListPerDayTypes, ProductRecord } from "../types/Record"


//recebe uma lista com todos os produtos e retorna a primeira data que terá um produto disponível
export function getFirstDataAvaible(allProducts:ProductRecord[] ){
  let firstOcurrencyDate = fromUnixTime(allProducts[0].product.data_criacao) 
  allProducts.map(product => {
    if(fromUnixTime(product.product.data_criacao) < firstOcurrencyDate){
      firstOcurrencyDate = fromUnixTime(product.product.data_criacao)
    }
  }) 
  return firstOcurrencyDate 
}

//Funcao criada para funcionar em conjunto com um iterados, recebe um array com valores e retorna 
//A proxima data seguindo padrao de repeticao e frequencia 
export function getItervals(arr: Date[] = [], repeatPatter: FrequencyTypes, frequency: number){
    if (repeatPatter === "dia") return addDays(arr[arr.length - 1], frequency)
    if (repeatPatter === "semana") return addWeeks(arr[arr.length - 1], frequency)
    if (repeatPatter === "mes") return addMonths(arr[arr.length - 1], frequency )
    if (repeatPatter === "ano") return addYears(arr[arr.length - 1], frequency)
    return null
}

export function getCurrentDayList(allProducts: ProductRecord[], currentDate: Date){
  let arrData: ProductRecord[] = [] 
    allProducts.map(data => {
      const {product, id} = data
      let finalDate = product.encerramento !== 0 && product.encerramento !== null &&  product.encerramento !== undefined && fromUnixTime(product.encerramento)  

      //Caso o produto tenha repeticao diária e esteja compreendido entre a data final inicial e atual 
      //será adiocionado no array final
      if(product.dias_em_listas === "every" && fromUnixTime(product.data_criacao) <= currentDate && (finalDate? finalDate <= currentDate : true)){
        arrData.push({id: id, product:product})  
      }else{

        if(product.dias_em_listas !== "every"){          
          //Sendo a uma das datas do item correspondente a data atual, este item será adicionado ao array final
          product.dias_em_listas?.map( dia => {
            if(format(dia, 'dd MMM yyy',{locale: pt})  === format(currentDate, 'dd MMM yyy',{locale: pt})){
              arrData.push({id: id, product: product })
            }  
          })
        }
      }
    })
  return arrData
}

//recebe uma data inical, o tamanho do container de de data em dias, os produtos do usuario e  retrona
//um array de objeto contendo os produtos por data
export function createColumnsData(Products: ProductRecord[],startAt: Date, sizeInDays: number){
  const columnsData: ListPerDayTypes[] = []
  let i = 0;
  while(i <= sizeInDays){
    const product = getCurrentDayList(Products, addDays(startAt, i))
    columnsData.push({date: addDays(startAt, i), Data: product})
    i++
  }
  return columnsData
}
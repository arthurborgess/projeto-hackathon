import { Console } from "console";
import { addDays, addMonths, addWeeks, addYears, eachDayOfInterval, fromUnixTime, getDay, getDaysInYear, nextDay } from "date-fns";
import { FrequencyTypes } from "../types/Product";
import { ProductRecord } from "../types/Record";

export interface getNextOcurrencyDayRes {
  initialDate: Date;
  realInitialDate: Date | null;
}

export function getNextValidDay(days: number[], startDate: Date): Date {

  let firstAvaibleDay: number = verifyNextFirstOcurrencyOf(days, startDate)
  //@ts-expect-error
  let finalDate = nextDay(startDate, firstAvaibleDay)

  if (getDay(startDate) === firstAvaibleDay) {
    return startDate
  }

  return finalDate
}


export function verifyNextFirstOcurrencyOf(days: number[], startDate: Date): number {
  let dayOfStarted = getDay(startDate)
  let isFoundAfter = false
  let isFoundBefore = false

  days = days.sort()

  let firstAfterDay: number | null = null
  let firstBeforeDay: number | null = null

  while (!isFoundAfter && dayOfStarted <= 7) {
    isFoundAfter = days.indexOf(dayOfStarted) !== -1
    firstAfterDay = isFoundAfter ? dayOfStarted : -1;
    dayOfStarted++
  }

  while (dayOfStarted >= days[0]) {
    isFoundBefore = days.indexOf(dayOfStarted) !== -1
    firstBeforeDay = isFoundBefore ? dayOfStarted : -1;
    dayOfStarted--
  }

  if (isFoundAfter && firstAfterDay) return firstAfterDay
  if (isFoundAfter && firstAfterDay) return firstAfterDay
  if (isFoundBefore && firstBeforeDay) return firstBeforeDay

  return 0
}

export function getNextOcurrencyDay(selectedDays: number[], startDate: Date, day: number) {
  const currentDays: number[] = selectedDays
  const isRepeatedDay = currentDays.indexOf(day) === -1 ? false : true

  if (isRepeatedDay) {
    const indexDay = currentDays.indexOf(day)
    currentDays.splice(indexDay, 1)
    const realInitDate = getNextValidDay(currentDays, startDate)
    if (currentDays.length === 0) {
      return {
        realInitialDate: null,
        days: currentDays
      }
    }

    return {
      realInitialDate: realInitDate,
      days: currentDays
    }
  }

  if (currentDays.length === 0) {
    currentDays.push(day)
    const realInitDate = getNextValidDay(currentDays, startDate)

    return {
      realInitialDate: realInitDate,
      days: currentDays
    }
  }

  currentDays.push(day)
  const realInitDate = getNextValidDay(currentDays, startDate)
  return {
    realInitialDate: realInitDate,
    days: currentDays
  }
}

export function getEndDate(startDate: Date, type: FrequencyTypes, frequency: number, numberOfPeriods: number) {

  if (type === "dia") {
    const finalDate = addDays(startDate, frequency * numberOfPeriods)
    return finalDate
  }
  if (type === "semana") {
    const finalDate = addWeeks(startDate, frequency * numberOfPeriods)
    return finalDate
  }
  if (type === "mes") {
    const finalDate = addMonths(startDate, frequency * numberOfPeriods)
    return finalDate
  }
  if (type === "ano") {
    const finalDate = addYears(startDate, frequency * numberOfPeriods)
    return finalDate
  }

  return null
}

export function getListOfDatesPerProduct(record: ProductRecord, stopFecthValueInDays: number): Date[] | "every" | null {

  const product = record.product

  const intervalCreateDateToNow = eachDayOfInterval({ start: product.data_criacao, end: new Date() })
  const limitFecthFoward = intervalCreateDateToNow.length + stopFecthValueInDays

  let repeatDaysArr: number[] = product.repete_nos_dias !== undefined ? JSON.parse("[" + product.repete_nos_dias + "]") : null

  //responsável por verificar qual tipo de adiçao sera realizada
  const add = (arr: Date[] = [], repeatPatter: FrequencyTypes, frequency: number) => {
    if (repeatPatter === "dia") return addDays(arr[arr.length - 1], frequency)
    if (repeatPatter === "semana") return addWeeks(arr[arr.length - 1], frequency)
    if (repeatPatter === "mes") return addMonths(arr[arr.length - 1], frequency)
    if (repeatPatter === "ano") return addYears(arr[arr.length - 1], frequency)
    return new Date()
  }

  if (product.frequencia_da_repeticao === 1 && product.tipo_de_repeticao === "dia") {
    return 'every'
  }

  // if(product.frequencia_da_repeticao !== 1 && product.tipo_de_repeticao === "dia"){
  //   let i = 0
  //   let dateArray: Date[] = []
  //   dateArray.push(fromUnixTime(product.data_criacao))
  //   while(i < limitFecthFoward){
  //     if( addDays(dateArray[dateArray.length -1], 1 ) > fromUnixTime(product.encerramento) && product.encerramento) break 
  //     dateArray.push(add(dateArray, product.tipo_de_repeticao, product.frequencia_da_repeticao))
  //     i ++
  //   }
  //   return dateArray
  // }

  //Verifica se é do tipo semana com apenas um dai selecionado, ou qualquer outro pattern diferente de semana com multiplos dias
  if (repeatDaysArr && repeatDaysArr.length === 1 || repeatDaysArr === null) {
    let i = 0
    let dateArray: Date[] = []
    dateArray.push(fromUnixTime(product.data_criacao))
    if (product.encerramento === null || product.encerramento === 0) {
      while (i < limitFecthFoward) {
        if (addDays(dateArray[dateArray.length - 1], 1) > addDays(new Date(), stopFecthValueInDays)) break
        dateArray.push(add(dateArray, product.tipo_de_repeticao, product.frequencia_da_repeticao))
        i++
      }
      return dateArray
    }

    while (i < limitFecthFoward) {
      if (addDays(dateArray[dateArray.length - 1], 1) > fromUnixTime(product.encerramento) && product.encerramento) break
      dateArray.push(add(dateArray, product.tipo_de_repeticao, product.frequencia_da_repeticao))
      i++
    }
    return dateArray
  }

  const firstOcurrencyOfFirstWeek = getDay(fromUnixTime(product.data_criacao))
  let isfirstOcurrencyInOutherWeeks: boolean = firstOcurrencyOfFirstWeek === repeatDaysArr[0] ? true : false
  let isLastOcurrenyInWeeks = repeatDaysArr[repeatDaysArr.length - 1] === firstOcurrencyOfFirstWeek && true

  //verifica os próximos dias até o fim da semana
  let arrayInitialWeekDays: number[] = []
  let arrayInitialWeekDate: Date[] = []
  if (!isfirstOcurrencyInOutherWeeks && !isLastOcurrenyInWeeks) {
    arrayInitialWeekDays.push(firstOcurrencyOfFirstWeek)
    repeatDaysArr.forEach(day => {
      if (day > firstOcurrencyOfFirstWeek) {
        arrayInitialWeekDays.push(day)
      }
    })
  }

  if (isLastOcurrenyInWeeks) (
    arrayInitialWeekDays.push(firstOcurrencyOfFirstWeek)
  )

  arrayInitialWeekDate.push(getNextValidDay([firstOcurrencyOfFirstWeek], fromUnixTime(product.data_criacao)))
  arrayInitialWeekDays.map(day => {
    if (arrayInitialWeekDays[0] !== day) {
      arrayInitialWeekDate.push(getNextValidDay([firstOcurrencyOfFirstWeek], fromUnixTime(product.data_criacao)))
    }
  })

  let i = 0;
  let finalArrayDate = arrayInitialWeekDate
  while (i < limitFecthFoward) {
    const nextDate = getNextValidDay(repeatDaysArr, addDays(finalArrayDate[finalArrayDate.length - 1], 1))
    if (nextDate < fromUnixTime(product.encerramento)) {
      finalArrayDate.push(nextDate)
    } else break
    i++
  }

  return finalArrayDate
}

export function getCalendarDays(startAt: Date, numberOfViews: number) {
  const dateArray = []
  dateArray.push(startAt)

  let i = 0

  while (i < numberOfViews) {
    dateArray.push(addDays(dateArray[dateArray.length - 1], 1))
    i++
  }

  return dateArray
}
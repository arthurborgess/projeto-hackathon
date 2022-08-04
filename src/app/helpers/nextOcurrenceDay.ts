import { addDays, addMonths, addWeeks, addYears, getDay, nextDay } from "date-fns";
import { FrequencyTypes } from "../types/Product";

export interface getNextOcurrencyDayRes {
  initialDate: Date ;
  realInitialDate: Date | null;
}

export function getNextValidDay(days: number[], startDate:Date): Date{

  let firstAvaibleDay: number  = verifyNextFirstOcurrencyOf(days, startDate)
  console.log(firstAvaibleDay)
  //@ts-expect-error
  let finalDate = nextDay(startDate , firstAvaibleDay)

  
  if(getDay(startDate) === firstAvaibleDay){
    return startDate
  } 

  return finalDate
}


export function verifyNextFirstOcurrencyOf(days: number[], startDate: Date): number  {
  let dayOfStarted = getDay(startDate)
  let isFoundAfter = false
  let isFoundBefore = false
  
  days = days.sort()

  let firstAfterDay:number | null = null
  let firstBeforeDay:number | null = null
  
  while(!isFoundAfter && dayOfStarted <= 7){
    isFoundAfter = days.indexOf(dayOfStarted) !== -1 
    firstAfterDay = isFoundAfter ? dayOfStarted : -1;
    dayOfStarted ++
  }

  while(dayOfStarted >= days[0] ){
    isFoundBefore = days.indexOf(dayOfStarted) !== -1 
    firstBeforeDay = isFoundBefore ? dayOfStarted : -1;
    dayOfStarted --
  }
  
  if(isFoundAfter && firstAfterDay) return firstAfterDay
  if(isFoundAfter && firstAfterDay) return firstAfterDay
  if(isFoundBefore && firstBeforeDay) return firstBeforeDay

  return 0
}

export function getNextOcurrencyDay(selectedDays:number[], startDate:Date, day:number){
  const currentDays: number[] = selectedDays
  const isRepeatedDay = currentDays.indexOf(day) === -1 ? false : true    

  if(isRepeatedDay){
    const indexDay = currentDays.indexOf(day)
    currentDays.splice(indexDay, 1)
    const realInitDate = getNextValidDay(currentDays,startDate)  
    if(currentDays.length === 0){
      return  {
        realInitialDate: null,
        days: currentDays
      }
    }

    return {
      realInitialDate: realInitDate,
      days: currentDays
    }
  }
  
  if(currentDays.length === 0){
    currentDays.push(day)
    const realInitDate = getNextValidDay(currentDays, startDate)  

    return{
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

export function getEndDate(startDate:Date, type: FrequencyTypes, frequency: number, numberOfPeriods: number){
  
  if(type === "dia"){
    const finalDate = addDays(startDate, frequency * numberOfPeriods)
    return finalDate
  }
  if(type === "semana"){
    const finalDate = addWeeks(startDate, frequency * numberOfPeriods)
    return finalDate
  }
  if(type === "mes"){
    const finalDate = addMonths(startDate, frequency * numberOfPeriods)
    return finalDate
  }
  if(type === "ano"){
    const finalDate = addYears(startDate, frequency * numberOfPeriods)
    return finalDate
  }

  return null
}


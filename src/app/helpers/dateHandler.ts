
import {
    DayAbbreviation, 
    DayAbbreviationArray,
    MonthAbbreviation,
    MonthAbbreviationArray, 
    CustomDateObject
} from '../types/Date'


const dayArray: DayAbbreviationArray = [
    'DOM',
    'SEG',
    'TER',
    'QUA',
    'QUI',
    'SEX',
    'SÁB'
]

const monthArray: MonthAbbreviationArray = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ'
]

export function getMonthAbrv(utcMonth: number | Date) : MonthAbbreviation {

    if(typeof utcMonth == 'number') {
        return monthArray[utcMonth]

    }else {
        return monthArray[utcMonth.getUTCMonth()]
    }
}

export function getDayAbrv(utcMonth: number | Date) : DayAbbreviation {

    if(typeof utcMonth == 'number') {
        return dayArray[utcMonth]

    }else {
        return dayArray[utcMonth.getUTCDay()]
    }
}

export function utcDateFormat(seconds: number): CustomDateObject{

    let milesimos = seconds * 1000

    const dateObj = new Date(milesimos)

    let day = getDayAbrv(dateObj)
    let date = dateObj.getUTCDate()
    let month = getMonthAbrv(dateObj)
    let year = dateObj.getUTCFullYear()

    return {day, date, month, year}
}


export type DayAbbreviation = 
    'DOM' | 
    'SEG' | 
    'TER' | 
    'QUA' | 
    'QUI' | 
    'SEX' | 
    'SÁB'

export type DayAbbreviationArray = [
    'DOM',
    'SEG', 
    'TER', 
    'QUA', 
    'QUI', 
    'SEX',
    'SÁB'
]

export type MonthAbbreviation  = 
    'JAN' |
    'FEV' |
    'MAR' |
    'ABR' |
    'MAI' |
    'JUN' |
    'JUL' |
    'AGO' |
    'SET' |
    'OUT' |
    'NOV' |
    'DEZ' 

export type MonthAbbreviationArray = [
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

export type CustomDateObject = {
    day:  DayAbbreviation, 
    date: string | number, 
    month: MonthAbbreviation, 
    year: string | number
}

const dayAbbreviation = [
    'DOM',
    'SEG',
    'TER',
    'QUA',
    'QUI',
    'SEX',
    'SÁB'
]

const monthAbbreviation = [
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

export function utcDateFormat(seconds) {

    let milesimos = seconds * 1000

    const dateObj = new Date(milesimos)

    let day = dayAbbreviation[dateObj.getUTCDay()]
    let date = dateObj.getUTCDate()
    let month = monthAbbreviation[dateObj.getUTCMonth()]
    let year = dateObj.getUTCFullYear()

    return {day, date, month, year}
}
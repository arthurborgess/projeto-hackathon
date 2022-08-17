const strings = [
    [10, 9, 8, 7, 6, 5, 4, 3, 2],
    [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
];

export const cpfValidate = (cpf: string): boolean => {
    let numbers = cpf.slice(0, -2);
    let digits = cpf.slice(-2);

    let firstDigit = getFirstDigit(numbers);

    if (repeatedDigit(cpf)) {
        if (firstDigit === Number(digits[0])) {
            let secondDigit = getSecondDigit(numbers + firstDigit);
            return secondDigit === Number(digits[1]) ? true : false;
        }
    }
    alert("CPF inválido!");
    return false;
}

const getFirstDigit = (numbers: string): number => {
    let sum = 0;
    for (let i in strings[0]) {
        sum += Number(numbers[i]) * strings[0][i];
    }
    let rest = sum % 11;
    const digit = rest < 2 ? 0 : (11 - rest);
    return digit;
}

const getSecondDigit = (numbers: string): number => {
    let sum = 0;
    for (let i in strings[1]) {
        sum += Number(numbers[i]) * strings[1][i];
    }
    let rest = sum % 11;
    const digit = rest < 2 ? 0 : (11 - rest);
    return digit;
}

const repeatedDigit = (cpf: string): boolean => {
    const first = cpf[0];
    let different = false;
    for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] !== first) {
            different = true;
        }
    }
    return different;
}
export const cpfValidate = (cpf: string) => {
    if (!repeatedDigit(cpf)) {
        alert('CPF inválido');
        return false;
    }
    if (!firstDigit(cpf)) {
        alert('CPF inválido');
        return false;
    }
    if (!secondDigit(cpf)) {
        alert('CPF inválido');
        return false;
    }
    return true;
}

const firstDigit = (cpf: any) => {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += cpf[i] * (10 - i);
    }
    const rest = (sum * 10) % 11;
    if (rest < 10) {
        return cpf[9] == rest;
    }
    return cpf[9] == 0;
}

const secondDigit = (cpf: any) => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += cpf[i] * (11 - i);
    }
    const rest = (sum * 10) % 11;
    if (rest < 10) {
        return cpf[10] == rest;
    }
    return cpf[10] == 0;
}

const repeatedDigit = (cpf: any) => {
    const first = cpf[0];
    let different = false;
    for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] != first) {
            different = true;
        }
    }
    return different;
}
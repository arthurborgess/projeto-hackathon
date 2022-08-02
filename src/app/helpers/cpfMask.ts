export const cpfMask = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if ((/[0-9]+/g).test(event.key) && event.target.value.length <= 13) {
        event.currentTarget.value += event.key;
    }

    if (event.target.value.length === 3) {
        event.currentTarget.value += '.';
    }
    if (event.target.value.length === 7) {
        event.currentTarget.value += '.';
    }
    if (event.target.value.length === 11) {
        event.currentTarget.value += '-';
    }
}

export const pasteCheck = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'v' && event.ctrlKey) {
        return false;
    }
}
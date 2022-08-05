export const emailValidate = (email: string) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,8}$/g;

    if (regex.test(email)) {
        return true;
    } else {
        alert('E-mail inválido!')
        return false;
    }
}
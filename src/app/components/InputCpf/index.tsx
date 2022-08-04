type Props = {
    cpf: string;
    setCpf: (cpf: string) => void;
}

export const InputCpf = ({ cpf, setCpf }: Props) => {

    const cpfValidate = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
        setCpf(event.currentTarget.value);
    }

    return (
        <input
            id="cpf-input"
            type="text"
            placeholder="CPF"
            onKeyPress={cpfValidate}
            onPaste={e => { e.preventDefault() }}
            required
            minLength={14}
        />
    );
}
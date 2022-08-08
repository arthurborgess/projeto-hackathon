type Props = {
    cpf: string;
    setCpf: (cpf: string) => void;
}

export const InputCpf = ({ cpf, setCpf }: Props) => {

    const cpfValidate = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        if ((/[0-9]+/g).test(event.key) && event.target.value.length <= 13) {
            event.currentTarget.value += event.key;

            if (event.target.value.length === 3) {
                event.currentTarget.value += '.';
            }
            if (event.target.value.length === 7) {
                event.currentTarget.value += '.';
            }
            if (event.target.value.length === 11) {
                event.currentTarget.value += '-';
            }
        } else if (event.key === 'Backspace') {
            let currentValue = cpf;
            currentValue = currentValue.slice(0, -1);
            setCpf(currentValue);
            return;
        }

        setCpf(event.currentTarget.value);

        console.log(cpf)
    }

    return (
        <input
            id="cpf-input"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            onKeyDown={cpfValidate}
            onPaste={e => { e.preventDefault() }}
            required
            minLength={14}
            maxLength={14}
        />
    );
}
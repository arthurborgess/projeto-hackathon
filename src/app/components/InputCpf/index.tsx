import InputMask from 'react-input-mask';

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCpf = ({ value, onChange }: Props) => {
    console.log(value)
    return (
        <InputMask
            mask="999.999.999-99"
            value={value}
            onChange={onChange}
            id="cpf-input"
            placeholder="CPF"
        />
    );
}
import InputMask from "react-input-mask";

type Props = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MaskedInput = ({ value, onChange }: Props) => {
    return (
        <InputMask
            placeholder="CPF"
            mask="999.999.999-99"
            value={value}
            onChange={onChange}
        />
    );
}
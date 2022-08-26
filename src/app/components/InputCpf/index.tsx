
type Props = {
    value: string;
    setValue: (value: string | ((prevVar: string) => string)) => void;
}

export const InputCpf = ({ value, setValue }: Props) => {

    function cpfFormat(cpf: string): string {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    };

    return (
        <input
            type="tel"
            value={value}
            onChange={e => setValue(cpfFormat(e.target.value))}
            placeholder="CPF"
            id="cpf-input"
        />
    );
};
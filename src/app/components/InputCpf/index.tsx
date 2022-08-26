
type Props = {
    value: string;
    setValue: (value: string | ((prevVar: string) => string)) => void;
}

export const InputCpf = ({ value, setValue }: Props) => {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        let currentValue = event.target.value.replace(/[^0-9]/g, '');
        setValue(cpfFormat(currentValue));
    };
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
            onChange={handleChange}
            placeholder="CPF"
            id="cpf-input"
        />
    );
};
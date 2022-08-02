import { Container, Form, Input, Submit } from "./styles";
import { useState } from "react";
import { cpfMask, pasteCheck } from "../../helpers/cpfMask";

export const LoginCadastro = () => {

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    const loginEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(cpf.replace(/[^0-9]/g, ''))
        if (cpf.replace(/[^0-9]/g, '').length < 11) {
            alert("O campo CPF precisa está completo!");
        }
    }

    return (
        <Container>
            <Form onSubmit={loginEvent}>
                <Input
                    placeholder="E-mail"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <Input
                    placeholder="CPF"
                    type="text"
                    onKeyPress={cpfMask}
                    onChange={(event) => setCpf(event.target.value)}
                    onKeyUp={pasteCheck}
                    required
                    minLength={14}
                />
                <Submit type="submit">Entrar</Submit>
            </Form>
        </Container>
    );
}
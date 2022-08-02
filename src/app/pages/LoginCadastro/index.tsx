import { Container, Form, Input, Submit } from "./styles";
import { MaskedInput } from "../../components";
import { useState } from "react";

export const LoginCadastro = () => {

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    const loginEvent = () => {

    }

    return (
        <Container>
            <Form onSubmit={loginEvent}>
                <Input
                    placeholder="E-mail"
                    type="email"
                />
                <MaskedInput
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                />
                <Submit type="submit">Entrar</Submit>
            </Form>
        </Container>
    );
}
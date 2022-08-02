import { Container, Form, Input, SaveLogin, Submit } from "./styles";
import { useState } from "react";
import { cpfValidate } from "../../helpers/cpfValidate";

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
                <h3>Entre ou cadastre-se</h3>
                <Input
                    placeholder="E-mail"
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoFocus
                />
                <Input
                    placeholder="CPF"
                    type="text"
                    onKeyPress={cpfValidate}
                    onChange={(event) => setCpf(event.target.value)}
                    onPaste={e => { e.preventDefault() }}
                    required
                    minLength={14}
                />
                <SaveLogin>
                    <input type="checkbox" id="saveLogin" name="saveLogin" />
                    <label htmlFor="saveLogin">Mantenha-me conectado</label>
                </SaveLogin>
                <Submit type="submit">Entrar</Submit>
            </Form>
        </Container>
    );
}
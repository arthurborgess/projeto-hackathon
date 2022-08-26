import { Container, Form, Input, SaveLogin, Submit } from "./styles";
import React, { useContext, useState } from "react";
import { InputCpf } from "../../components/InputCpf";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { cpfValidate } from "../../helpers/cpfValidate";
import { emailValidate } from "../../helpers/emailValidate";

export const LoginCadastro = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const [saveLogin, setSaveLogin] = useState(false);

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var formattedCpf = cpf.replace(/[^0-9]/g, '');
        if (formattedCpf.length < 11) {
            alert("O campo CPF precisa estar completo!");
        } else {
            if (cpfValidate(formattedCpf) && emailValidate(email)) {
                const isLogged = await auth.login(email, formattedCpf, saveLogin);
                if (isLogged) {
                    navigate('/');
                }
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <h3>Entre ou cadastre-se</h3>
                <Input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoFocus
                />
                <InputCpf
                    value={cpf}
                    setValue={setCpf}
                />
                <SaveLogin>
                    <input
                        type="checkbox"
                        id="saveLogin"
                        name="saveLogin"
                        onChange={() => setSaveLogin(current => !current)}
                    />
                    <label htmlFor="saveLogin">Mantenha-me conectado</label>
                </SaveLogin>
                <Submit type="submit">Entrar</Submit>
            </Form>
        </Container>
    );
}
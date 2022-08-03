import { Container, Form, Input, SaveLogin, Submit } from "./styles";
import { useContext, useState } from "react";
import { InputCpf } from "../../components/InputCpf";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginCadastro = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        var formattedCpf = cpf.replace(/[^0-9]/g, '');
        if (formattedCpf.length < 11) {
            alert("O campo CPF precisa estar completo!");
        } else {
            const isLogged = await auth.login(email, formattedCpf);
            if (isLogged) {
                navigate('/dashboard');
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
                    cpf={cpf}
                    setCpf={setCpf}
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
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container } from "./styles";

type Props = {
    onClose: () => void;
}

export const ModalMenu = ({ onClose }: Props) => {

    const auth = useContext(AuthContext);

    const hangleLogout = () => {
        if (window.confirm("Tem certeza que deseja sair?")) {
            auth.logout();
        }
    }

    return (
        <Container>
            <div className="close" onClick={onClose}>⨯</div>
            <Link className="link" to="/">Lista de produtos</Link>
            <Link className="link" to="/lista-completa">Lista completa</Link>
            <Link className="link" to="/login" onClick={hangleLogout}>Sair</Link>
        </Container>
    );
}
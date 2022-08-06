import { Link } from "react-router-dom";
import { Container } from "./styles";

type Props = {
    onClose: () => void;
}

export const ModalMenu = ({ onClose }: Props) => {

    return (
        <Container>
            <div className="close" onClick={onClose}>⨯</div>
            <Link className="link" to="/">Lista de produtos</Link>
            <Link className="link" to="/lista-completa">Lista completa</Link>
        </Container>
    );
}
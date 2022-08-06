import { Link } from "react-router-dom";
import { Container, HeaderContent } from "./styles"

export const Header = () => {
    return (
        <Container>
            <HeaderContent>
                <div className="links">
                    <Link className="link" to="/">Produtos</Link>
                    <Link className="link" to="/lista-completa">Lista do dia</Link>
                </div>
            </HeaderContent>
        </Container>
    );
}
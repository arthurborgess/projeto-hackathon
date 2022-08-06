import { useEffect, useState } from "react";
import { ModalMenu } from "../ModalMenu";
import { Container, HeaderContent } from "./styles"

export const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        handleScreenChange();
    }, []);

    const handleScreenChange = () => {
        if (window.innerWidth >= 1112) {
            setMenuIsOpen(true);
        }
        if (window.innerWidth <= 1111) {
            setMenuIsOpen(false);
        }
    }

    window.addEventListener('resize', handleScreenChange);

    return (
        <Container>
            <HeaderContent>
                <div id="menu-icon" onClick={() => setMenuIsOpen(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {menuIsOpen && <ModalMenu onClose={() => setMenuIsOpen(false)} />}
            </HeaderContent>
        </Container>
    );
}
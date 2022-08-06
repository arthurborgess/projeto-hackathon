import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 60px;
    background-color: #1A73FF;
`;

export const HeaderContent = styled.div`
    margin: 0 auto;
    max-width: 900px;
    height: 100%;
    width: 95%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;

    svg {
        filter: invert(100%);
        height: 100%;
    }

    @media (max-width: 1111px) {
        #menu-icon {
            width: 1.2rem;
            height: 0.8rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        #menu-icon div {
            width: 100%;
            height: 2px;
            background: #FFF;
        }
    }
    @media (min-width: 1112px) {
        #menu-icon {
            display: none;
        }
    }
`;
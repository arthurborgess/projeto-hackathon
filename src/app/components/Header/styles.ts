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
    justify-content: flex-end;
    align-items: center;
    color: #FFFFFF;

    .links {
        font-size: 1rem;

        .link { 
            margin-left: 15px;
        }
        
        .link:hover {
            text-decoration: underline;
        }
    }
`
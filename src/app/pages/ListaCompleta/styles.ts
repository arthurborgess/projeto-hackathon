import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 900px;
    width: 95%;
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    margin: 10px 0;
`;

export const Product = styled.div(({ done }: { done: boolean }) => (`
    width: 100%;
    height: 40px;
    padding: 0 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #CCC;
    font-size: 1.1rem;
    background-color: ${done ? `#59CE8F` : `#F9F9F9`};
`));

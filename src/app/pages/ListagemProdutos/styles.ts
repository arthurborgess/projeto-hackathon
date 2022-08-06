import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    max-width: 900px;
    margin: auto;

    svg {
        cursor: pointer;
        &:hover {
            filter: invert(41%) sepia(95%) saturate(7476%) hue-rotate(354deg) brightness(105%) contrast(125%);
        }
    }

    .noProductsMsg {
        text-align: center;
    }
`

export const Top = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 10px;

    .registerBtn {
        align-self: flex-start;
        background-color: #1A73FF;
    }
    
`

export const ListHeaders = styled.div`

    display: flex;
    justify-content: space-around;
    margin-bottom: 5px;
    padding: 5px;
    font-weight: bold;

    .header-product-name {
        flex-grow: 1;
        align-self: center;
        text-align: center;
    }

`

export const Content = styled.div`

    display: flex;
    flex-direction: column;

`

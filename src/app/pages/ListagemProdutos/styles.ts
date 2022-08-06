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
        background-color: #1A5FFF;
    }
    
`

export const Content = styled.table`

    border-collapse: collapse;

    thead {
        background-color: #1A5FFF;
        color: #F9F9F9;
    }

    thead th {
        padding: 10px;
    }

    tbody tr {
        border-top: 1px solid black;
        cursor: pointer;
    }

    tbody tr:hover {
        background-color: #1A73FF;
        color: #F9F9F9;
    }

    td, th {
        text-align: center;
        padding: 5px;
    }

`

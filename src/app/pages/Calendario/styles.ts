import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    max-width: 900px;
    margin: 0 auto;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    
    button {
        width: 80px;
        height: 30px;
        margin: 0 5px;
        text-align: center;
        border: none;
        background-color: #1A5FFF;
        color: #FFFFFF;
        border-radius: 3px;
    }
    #today-button {
        background-color: #FFFFFF;
        color: #1A5FFF;
        border: 1px solid #1A5FFF;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0%;
    top: 0%;
    z-index: 1;
    overflow: auto;
    background-color: rgba(0,0,0,0.4); 
    opacity: 1;
    width: 100%;
    height: 100%;
    
`

export const Content = styled.div`

    position: absolute;
    top: 15%;
    display: flex;
    width: 350px;
    height: 160px;
    border-radius: 4px;
    padding-bottom: 5px;
    flex-direction: column;
    background-color: #fefefe;
    
    .actionBtn {
        font-weight: bold;
        padding: 8px;
        cursor: pointer;
        color: white;
        border: none;
        border-radius: 4px;
        opacity: 0.8;
    }
`

export const Top = styled.div`
    display: flex;
    background-color: #1A73FF;
    padding: 5px;
    border-radius: 4px 4px 0px 0px;

    .title {
        display: flex;
        align-self: center;
        flex-grow: 1;
        font-weight: bold;
        color: #fefefe;
    }

    .closeBtn {
        font-size: 1.5em;
        cursor: pointer;
    }

    .closeBtn:hover {
        color: red;
    }

`

export const Body = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    flex-grow: 1;
    padding: 5px;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: center;

    button {
        background-color: #1A73FF;
        cursor: pointer;
        margin: 2px;
        padding: 8px;
    }
`





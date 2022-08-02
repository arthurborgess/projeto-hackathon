import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F9F9F9;
`;

export const Form = styled.form`
    left: 50%;
    top: 50%;
    position: absolute;
    transform translate(-50%, -50%);
    width: 400px;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #FFF;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    color: #333;
    
    h3 {
        margin-bottom: 15px;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 3px;
    text-indent: 10px;
    background-color: #F9F9F9;
    outline-color: #1A5FFF;
    border: 1px solid #999;
    margin-top: 15px;
`;

export const SaveLogin = styled.div`
    margin-top: 30px;
    font-size: 1rem;

    input {
        margin-right: 5px;
    }
`;

export const Submit = styled.button`
    height: 50px;
    margin-top: 30px;
    border-radius: 5px;
    border: 1px solid #999;
    background-color: #1A5FFF;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.3s;

    &:hover {
        background-color: #1A73FF;
    }
`;
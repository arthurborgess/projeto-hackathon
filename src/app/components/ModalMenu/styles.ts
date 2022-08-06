import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 70%;
    background-color: #F9F9F9;
    font-size: 1rem;
    display: flex;
    flex-direction: column;

    .close {
        font-size: 2rem;
        color: red;
        margin: .5rem 1rem;
    }
    
    .line {
        height: 50%;
        border: 1px solid #979797;
    }
    .link {
        color: #1A73FF;
        margin: 5px;
        margin-right: 20px;
        text-align: right;
    }

    @media(min-width: 768px) {
        width: 40%;
    }
    @media (min-width: 1112px) {
        position: relative;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        .close {
            display: none;
        }
        .link {
            color: #FFF;
            margin-right: 0;
            margin-left: 25px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
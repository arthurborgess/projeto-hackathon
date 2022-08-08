import styled from "styled-components";
import {StyledIconBase} from '@styled-icons/styled-icon'

export const NoProducts = styled.div`
    text-align: center;

    padding-top: 16px;
  ${StyledIconBase} {
    margin: 8px  auto;
    color: #1a5fff;
    height: 38px; 
    display: block; 
  }
`


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    border-radius: 16px;

    @media (max-width: 600px){
    border-bottom: 16px;    
    width: 180px;
    }

    min-height: 160px;

    width: 100px;
    min-height: 240;
    max-height: 240;

    box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);
    -webkit-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);
    -moz-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;

    height: 168px;
    max-height: 168px;
`
export const ItensWrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;

    height: 120px;
    max-height: 120px;
`

export const DateField = styled.div`
    width: 100%;
    height: 48px;
    line-height: 48px;
    
    border-top-left-radius:16px;
    border-top-right-radius:16px;
    background-color: #1a5fff;
    
    text-align: center;
    color:#FFFFFF;
`;

export const Button = styled.button`

    background-color: #f9f9f9;
    border: 1px solid #1a5fff;

    font-weight: 500px;

    border-radius: 16px;
    line-height: 32px;
    text-align: center;

    margin: 8px;
    transition: .4s;

    &.today{
        ${StyledIconBase} {
        color: #1a5fff;
        height: 22px;
        margin: 5px 0; 
        }
    }

    &:hover {
        background-color: #1a5fff;
        color: #ffffff;
        ${StyledIconBase} {
        color: #ffffff;
        font-size: 12px;
        }
    }
`
import styled from "styled-components";
import {StyledIconBase} from '@styled-icons/styled-icon'

export const Wrapper = styled.div`
    background-color: #f9f9f9;
    width: 100%;
    margin-bottom: 32px;
    padding: 32px 10%;
    @media (max-width: 1000px){
      padding: 32px 5%;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 320px;

  background-color: #ffffff;

  min-height: 410px;
  border-radius: 32px;
  box-shadow: 0px 0px 16px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 16px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 16px -2px rgba(0,0,0,0.75);
`

export const Buttons = styled.div`
  width: 100%;
  text-align: center;
  color:#1a5fff;
  margin-bottom: 32px;


  > button {
    border:1px solid #1a5fff; 
    border-radius: 50%;
    line-height: 32px;

    box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);
    -webkit-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);
    -moz-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);

    ${StyledIconBase} {
    color: #1a5fff;
    height: 30px;  
    }

    &:hover {
      color: #ffffff;
      background-color: #1a5fff;
      ${StyledIconBase} {
      color: #ffffff;
      height: 30px;  
      }
  }
   
    &.today{
      margin: 0 8px;
      border-radius: 16px;
      width: 48px;
      text-align: center;
    }
  }
`
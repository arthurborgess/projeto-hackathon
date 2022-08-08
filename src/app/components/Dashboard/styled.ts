import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 10%;
  padding: 36px 0;

  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 240px;
  width: 45%;

  min-width: 320px;


  background-color: #ffffff;

  border-radius: 32px;
  box-shadow: 0px 0px 16px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 16px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 16px -2px rgba(0,0,0,0.75);

  
`

export const Title = styled.h2`

  color: #F2F2F2;
  text-align: center;
  letter-spacing: .5px;
  font-size: 22px;
  font-weight: 400;

  line-height: 16px;
  padding: 16px 0;
  width: 100%;
  background-color: #1a5fff;

  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`

export const MiniBox = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
  width: 40%;

  background-color: #ffffff;

  border-radius: 32px;
  box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);
  -webkit-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);
  -moz-box-shadow: -2px 4px 15px 0px rgba(0,0,0,0.18);

  > span{
    font-weight: bold;
    margin: auto;
    font-size: 40px;
  }
`

export const Wrapper = styled.div`
  height: 100%;
  padding: 16px;

  display: flex;
  gap: 16px;
` 

export const Buttons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Button = styled.button`

    background-color: #f9f9f9;
    border: 1px solid #1a5fff;

    font-weight: 500px;

    height: 50%;

    padding: 4px;

    border-radius: 16px;
    text-align: center;

    width: 120px;

    @media (max-width: 840px){
    width: 100%px;
    }

    margin: 8px;
    transition: .4s;

    ${StyledIconBase} {
    display: block;
    color: black;
    height: 22px;
    margin: 5px auto; 

    }
    

    &.add {
      ${StyledIconBase} {
      display: block;
      color: #1a5fff;
      height: 22px;
      margin: 5px auto; 
    }
    }

    &:hover {
        background-color: #1a5fff;
        color: #ffffff;
        ${StyledIconBase} {
        color: #ffffff;
        font-size: 12px;
        }
}`


export const MiniTitle = styled.h3`
  color: #F2F2F2;
  text-align: center;
  letter-spacing: .5px;
  font-size: 16px;
  font-weight: 400;

  line-height: 16px;
  padding: 16px 0;
  width: 100%;
  background-color: #1a5fff;

  border-top-right-radius: 32px;
  border-top-left-radius: 32px;

`

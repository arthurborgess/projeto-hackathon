import styled from 'styled-components'

export const Wrapper = styled.div`
 padding: 16px 0 8px;
 
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 align-items: center;

 gap: 8px;
`

export const NumberInput = styled.input`
  border: none;
  outline: none;

  background-color: #ebebeb;
  line-height: 32px;
  height: 32px;
  width: 48px;

  padding: 4px;
  text-align: center;
  vertical-align: center;

  border-radius: 8px;
  transition: .1s;

  &:focus , &:hover{
    border-bottom: 2px solid #1a5fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

export const Select = styled.select`
  border: none;
  outline: none;

  background-color: #ebebeb;
  line-height: 32px;
  height: 32px;
  width: 80px;

  padding: 4px;
  text-align: left;
  vertical-align: center;

  border-radius: 8px;

  transition: .1s;
  &:focus , &:hover{
    cursor: pointer;
    border-bottom: 2px solid #1a5fff;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

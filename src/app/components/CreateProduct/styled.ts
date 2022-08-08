import styled from "styled-components";

type OverlayPropsType = {
  isOpen: boolean,
}

export const Overlay  = styled.div<OverlayPropsType>`
  display: ${props => props.isOpen? "visible" : "none"}; 
  display: visible;
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 999999;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`

export const Modal = styled.div`

  color: #424042;
  max-width: 400px;
  min-width: 300px;
  height: fit-content;
  background-color: #ffffff;

  padding: 16px;

  border-radius: 8px;

  -webkit-box-shadow: 0px 0px 34px 4px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 0px 34px 4px rgba(0,0,0,0.1);
  box-shadow: 0px 0px 34px 4px rgba(0,0,0,0.1);
`

export const Title = styled.input`
  border: none;
  outline: none;

  width: 100%; 
  padding: 8px 2px 2px; 
  color: #424042;

  border-bottom: 1px solid #d3d3d3;
  font-size: 20px; 

  transition: .1s;

  &:focus , &:hover{
    border-bottom: 2px solid #1a5fff;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
`
export const Cancel = styled.button`
  outline: none;
  border-radius: 8px;
  border: 1px solid #1a5fff;
  text-align: center;
  width: 100px;
  height: 32px;
  line-height: 32px;
  
  &:hover {
    cursor: pointer;
  }
`
export const Create = styled.button`
  outline: none;
  border: none;

  text-align: center;
  width: 100px;
  height: 32px;
  line-height: 32px;
  color: #ffffff;
  border-radius: 8px;
  background-color: #1a5fff;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: .8;
    background-color: gray;
    cursor: progress;
    color: black;
  }
`


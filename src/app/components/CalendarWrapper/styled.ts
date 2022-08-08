import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column
`

export const WrapperColumns = styled.div`
  display: flex;
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffffff;

  padding: 32px;
  gap: 16px;
`

export const Title = styled.h2`

  color: #F2F2F2;
  text-align: center;
  letter-spacing: .5px;
  font-size: 22px;
  font-weight: 400;

  line-height: 32px;
  padding: 16px 0;
  width: 100%;
  background-color: #1a5fff;

  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
`


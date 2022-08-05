import styled from 'styled-components'

export const Wrapper = styled.div`
   display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  padding: 4px 0;

 .react-datepicker-wrapper {
  width: 120px;
 }

  .date-piker{
    border: none;
    outline: none;

    background-color: #ebebeb;
    line-height: 32px;
    height: 32px;
    max-width: 100px;

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
  }
`

export const InputFrequency = styled.input`
    border: none;
    outline: none;

    background-color: #ebebeb;
    line-height: 32px;
    height: 32px;
    width: 80px;

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

export const WrapperInputLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 4px;
`

export const Alert = styled.p`
  text-align: center;
  max-width: 220px;
  padding:0 auto;
  
  margin: 0 auto;  
  font-size: 13px;

  span {
    font-size:14px;
    color: #1a5fff
  }
`
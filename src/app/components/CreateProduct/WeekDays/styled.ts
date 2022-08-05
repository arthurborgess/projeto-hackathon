import styled from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  padding-bottom: 8px;
`

export const DaysWrapper = styled.div`
  display: flex;
  gap: 4px;

  align-self: center;

  .selected {
    background-color: #1a5fff;
    color: #f1f3f4;
  }
`

export const Day = styled.div`
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #f1f3f4;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;

  font-size: 14px;
  text-transform: uppercase;

  transition: .4s;

  &:hover {
    cursor: pointer;
    background-color: #1a5fff;
    color: #f1f3f4;
  }
`

export const Alert = styled.p`
  text-align: center;
  max-width: 220px;
  padding:0 auto;
  align-self: center;

  font-size: 13px;

  span {
    font-size:14px;
    color: #1a5fff
  }
`
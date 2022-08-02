import styled from 'styled-components'

export const DaysWrapper = styled.div`
  display: flex;
  gap: 4px;

  .selected {
    background-color: #1a73e8;
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
    background-color: #1a73e8;
    color: #f1f3f4;
  }
`
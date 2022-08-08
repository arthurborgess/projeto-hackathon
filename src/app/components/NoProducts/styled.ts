import styled from 'styled-components'
import { StyledIconBase } from '@styled-icons/styled-icon'

export const NoProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  flex-direction: column;

  height: 100%;
  width: 100%;
  gap: 10%;

  > p {
    height: 30%;
    text-align: center;
    font-size: 14px;
  }

  ${StyledIconBase} {
    color: black;
    width: 30%;
  }

`
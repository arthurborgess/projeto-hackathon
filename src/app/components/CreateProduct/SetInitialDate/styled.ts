import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  padding: 8px 0;

 .react-datepicker-wrapper {
  width: 100px;
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
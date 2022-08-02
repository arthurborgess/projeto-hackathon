import { useRef } from "react"
import { SelectDayWeek } from "../../components"
import { Title, CenterWrapper, WrapperProducts, InputNumber } from "./styled"

export const ProductManager = () => {
  

  return (
    <CenterWrapper>
      <WrapperProducts>
        <SelectDayWeek/>
      </WrapperProducts>
    </CenterWrapper>
  )
}
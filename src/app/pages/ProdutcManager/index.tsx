import { RepetitionPattern, SelectDayWeek } from "../../components"
import { CenterWrapper, WrapperProducts } from "./styled"

export const ProductManager = () => {
  

  return (
    <CenterWrapper>
      <WrapperProducts>
        <SelectDayWeek/>
        <RepetitionPattern/>
      </WrapperProducts>
    </CenterWrapper>
  )
}
import { FrequencyTypes } from "../../../types/Product"
import { CreateProductContext } from "../../../contexts/Products/CreateProductProvider "
import { useContext } from "react"
import { NumberInput, Select, Wrapper } from "./styled"

export const RepeatEvery = () => {

  const { repeatPattern, setRepeatPattern } = useContext(CreateProductContext)
  const namesOfRepetition: FrequencyTypes[] =  ["dia", "semana", "mes", "ano"]

  function handleGetTypeSelected(index: number){
    setRepeatPattern({
      type: namesOfRepetition[index],
      frequency: 1
    })
  }

  function handleGetRepetitionNumber(actualNumber: number){
    
    if(actualNumber <= 0 || actualNumber.toString() === "NaN"){
      setRepeatPattern(prevState => ({
        ...prevState,
        frequency: 1
      }))
      return
    }

    if(actualNumber > 365 && repeatPattern.type === "dia") return
    if(actualNumber >= 100 && repeatPattern.type !== "dia") return

    setRepeatPattern(prevState => ({
      ...prevState,
      frequency: actualNumber
    }))
  }
  
  return(
    <Wrapper>
      <label htmlFor="repeition">Repetir a cada: </label>
      <NumberInput 
        value={repeatPattern.frequency}
        onChange={(e) => handleGetRepetitionNumber(e.target.valueAsNumber)}
        type="number" 
        id="repeition"
      />
      <Select onChange={(e) => handleGetTypeSelected(e.target.selectedIndex)} name="repetitionsType" id="repetitions-type">
        {namesOfRepetition.map((name, index) => (
          <option 
            value={name}
            key={'repetition' + name + index}
            >
            {repeatPattern.frequency > 1 ? name === "mes" ? name + "es" : name + "s" : name}
          </option>
        ))}
      </Select>
    </Wrapper>
  )
} 
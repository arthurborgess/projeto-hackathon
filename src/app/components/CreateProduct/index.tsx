import { FormEvent, useContext} from "react"
import { SetInitialDate } from "./SetInitialDate"
import { RepeatEvery } from "./RepeatEvery"
import { SetEndDate } from "./SetEndDate"
import { WeekDays } from "./WeekDays"
import { CreateProductContext } from "../../contexts/CreateProductProvider "

interface CreateProdutModalProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  toClose: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateProductModal = () => {
  const { itemName, setItemName ,repeatPattern } = useContext(CreateProductContext)

  function handleCreateProduct(e: FormEvent){
    e.preventDefault()
  }

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    setItemName(e.target.value)
  }

  return (
    <>
      <input 
      placeholder="Nome do produto"
      onChange={(e) => handleChangeName(e) }
      value={itemName}
      />
      <RepeatEvery/> 
      <SetInitialDate/>
      {repeatPattern.type === "semana" && (
         <WeekDays/>       
      )}
      <SetEndDate/>
      <button onClick={(e) => handleCreateProduct(e)}>Create</button>
    </>
  )
}
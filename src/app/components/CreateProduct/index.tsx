import { useContext, useEffect } from "react"
import { SetInitialDate } from "./SetInitialDate"
import { RepeatEvery } from "./RepeatEvery"
import { SetEndDate } from "./SetEndDate"
import { WeekDays } from "./WeekDays"
import { CreateProductContext } from "../../contexts/Products/CreateProductProvider "
import { ButtonsWrapper, Cancel, Create, Modal ,Overlay, Title, Wrapper } from "./styled"
import { AuthContext } from "../../contexts/Auth/AuthContext"

interface CreateProdutModalProps {
  isOpen: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>
  toClose?: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateProductModal = ({isOpen, setModalOpen, toClose}: CreateProdutModalProps) => {
  const { isLoading ,handleCreateProduct ,itemName, setItemName , repeatPattern } = useContext(CreateProductContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {
  },[isLoading])

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>){
    e.preventDefault()
    setItemName(e.target.value)
  }

  return (
    <Overlay
      isOpen={isOpen}
    >
      <Wrapper>
        <Modal>
          <Title 
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
          <ButtonsWrapper>
            <Cancel>Cancelar</Cancel>
            <Create onClick={() => handleCreateProduct(user)}>Criar</Create>
          </ButtonsWrapper>
          {isLoading && (<p>carregando</p>)}
        </Modal>
      </Wrapper>

    </Overlay>
  )
}
import { useContext, useEffect, useState } from "react"
import { SetInitialDate } from "./SetInitialDate"
import { RepeatEvery } from "./RepeatEvery"
import { SetEndDate } from "./SetEndDate"
import { WeekDays } from "./WeekDays"
import { CreateProductContext } from "../../contexts/Products/CreateProductProvider "
import { ButtonsWrapper, Cancel, Create, Modal, Overlay, Title, Wrapper } from "./styled"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface CreateProdutModalProps {
  isOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CreateProductModal = ({isOpen, setModalOpen}: CreateProdutModalProps) => {
  const { isLoading, handleCreateProduct, itemName, setItemName , repeatPattern, err } = useContext(CreateProductContext)
  const { user } = useContext(AuthContext)
  const [ error, setError ] = useState<string | null>(null)

  useEffect(() => {
    if(err !== null || err !== undefined){
      setError(err)
    }
  },[err])

  
  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    setItemName(e.target.value)
  }

  useEffect(() => {
    if(error !== null && error !== undefined){
      toast(error, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined});
    }
  },[error])
  


  return (
    <Overlay
      isOpen={isOpen}
    >
      <Wrapper>
        <Modal>
          <Title
            placeholder="Nome do produto"
            onChange={(e) => handleChangeName(e)}
            value={itemName}
          />
          <RepeatEvery />
          <SetInitialDate />
          {repeatPattern.type === "semana" && (
            <WeekDays />
          )}
          <SetEndDate />
          <ButtonsWrapper>
          {isLoading ? (
          <>
            <Cancel onClick={() => setModalOpen(false)} >Sair</Cancel>
            <Create onClick={() => handleCreateProduct(user)} disabled>Criando</Create>
          </>
            ) : (
              <>
                <Cancel onClick={() => setModalOpen(false)} >Sair</Cancel>
                <Create onClick={() => handleCreateProduct(user)}>Criar</Create>
              </>
          )}
          </ButtonsWrapper>
        </Modal>
      </Wrapper>
      <ToastContainer/>
    </Overlay>
  )
}

import { useContext, useEffect } from "react"

import { SetInitialDate } from "../CreateProduct/SetInitialDate"
import { RepeatEvery } from "../CreateProduct/RepeatEvery"
import { SetEndDate } from "../CreateProduct/SetEndDate"
import { WeekDays } from "../CreateProduct/WeekDays"

import { CreateProductContext } from "../../contexts/Products/CreateProductProvider "
import { ButtonsWrapper, Cancel, Create, Modal, Overlay, Title, Wrapper } from "../CreateProduct/styled"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ProductRecord, ResOfProductRecords } from '../../types/Record';

import { getUnixTime } from "date-fns";
import { User } from "../../types/User"

interface EditProductProps {
  startProduct: ProductRecord,
  isOpen: boolean,
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  toClose?: React.Dispatch<React.SetStateAction<boolean>>,
  onUpdate?: (productRecordID: string, userID: string) => void
}

export default function EditProductModal({
  startProduct,
  isOpen, 
  setModalOpen, 
  toClose,
  onUpdate}: EditProductProps){

  const { 
    isLoading, 
    itemName, 
    setItemName ,
    weekDays,
    setWeekDays,
    endDate,
    setEndDate,
    repeatPattern,
    setRepeatPattern
  } = useContext(CreateProductContext)

  const currentUser = useContext(AuthContext).user

  useEffect(() => {
    console.log(startProduct);

  }, [isLoading])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setItemName(e.target.value)
  }

  const createProductRecord = (productRecordID: string, userID: string) : ResOfProductRecords => {

      return {
        id: productRecordID,
        fields: {
          id_usuario: userID,
          nome: itemName,
          tipo_de_repeticao: repeatPattern.type,
          frequencia_da_repeticao: repeatPattern.frequency,
          repete_nos_dias: weekDays.days.toString(),
          encerramento: endDate === null ? 0 : getUnixTime(endDate),
          data_criacao: weekDays.realInitialDate === null ? getUnixTime(new Date()) : getUnixTime(weekDays.realInitialDate),
          data_primeira_ocorrencia: weekDays.realInitialDate === null ? 0 : getUnixTime(weekDays.realInitialDate) 
        }
      }
    }

    // const updateHandler = () => {

    //   let updatedProductRecord = createProductRecord(startProduct.id, currentUser)
    //   console.log(updatedProductRecord);

    // }

  return (
    // <Overlay isOpen={isOpen}>
      <Wrapper>

        <Modal>

          <Title
            placeholder="Nome do produto"
            onChange={(e) => handleChangeName(e)}
            value={itemName}
          />
          <RepeatEvery />

          <SetInitialDate />

          {repeatPattern.type === "semana" && (<WeekDays />)}

          <SetEndDate />

          <ButtonsWrapper>
            <Cancel>Cancelar</Cancel>
            {/* <Create onClick={e => { updateHandler() }
            }>Criar</Create> */}
          </ButtonsWrapper>

          {isLoading && (<p>carregando</p>)}

        </Modal>

      </Wrapper>

    // </Overlay>
  )
}
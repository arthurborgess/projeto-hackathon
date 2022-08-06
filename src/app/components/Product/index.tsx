import { useState } from 'react'
import { Container } from './styles'
import Modal from '../Modal'
import RemoveButton from '../RemoveButton'
import { CustomDateObject } from '../../types/Date'

interface ProductProps {
    id: string,
    name: String,
    dateObj: CustomDateObject,
    onRemove: Function
}

// define cada produto da lista de produtos
export default function Product({ id, name, dateObj, onRemove }: ProductProps) {

    let [showModal, setShowModal] = useState(false)

    // vai enviar a confirmação via props e fechar o modal
    // confirmation => se quer ou não remover o produto
    const modalHandler = (confirmation: boolean) => {

        if (confirmation) { onRemove(id) }
        setShowModal(false)
    }

    let { day, date, month, year } = dateObj

    return (

        <>
            <Container>

                <div className='product-creation-date'>
                    {`${date} ${month} ${year} (${day})`}
                </div>
            
                <div className='product-name'>{name}</div>
            
                <RemoveButton clickHandler={() => setShowModal(true)}/>
            </Container>
            
            {
                showModal &&
                <Modal
                    title='Confirmar'
                    msg={`Deseja excluir o item ${name}?`}
                    onConfirmation={modalHandler}
                />
            }
        </>
    )
}
import { useState } from 'react'
import { Container } from './styles'
import Modal from '../Modal'
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

                <svg onClick={e => setShowModal(true)} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 6.0683594 22 L 17.931641 22 L 19.634766 7 L 4.3652344 7 z" /></svg>
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
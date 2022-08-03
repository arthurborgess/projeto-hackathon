
import { useState } from 'react'
import style from '../styles/product.module.css'
import Modal from './Modal'

// define cada produto da lista de produtos
export default function Product({id, name, dateObj, onRemove}) {

    let [showModal, setShowModal] = useState(false)

    // vai enviar a confirmação via props e fechar o modal
    // confirmation => se quer ou não remover o produto
    const modalHandler = (confirmation) => {

        if(confirmation) { onRemove(id)   }
        setShowModal(false)
    }

    let {day, date, month, year} = dateObj ?? {day: 'SEG', date: '15', month: 'AGO', year: '2022'}

    return (

        <>
        <div className={style.container}>
            <div>{`${date} ${month} ${year} ${day}`}</div>
            <div>{name}</div>
            <button onClick={e => setShowModal(true)}>Remove</button>
        </div>

        {
            showModal && 
            <Modal 
            title='Confirmar?'
            msg={`Deseja excluir o item ${name}?`}
            onConfirmation={modalHandler}
            />
        }
        </>
    )
}
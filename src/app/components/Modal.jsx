
import { useState } from 'react'
import style from '../styles/modal.module.css'
import globalStyle from '../styles/global.module.css'

export default function Modal({title, msg, onConfirmation}){

    let [show, setShow] = useState(true)

    return (

        <div className={`${style.container} ${show ? style.show : ''}`}>

            <div className={`${style.content}`}>

                <div className={style.top}>
                    <div className={style.title}>{title}</div>
                    <div 
                    className={style.closeBtn}
                    onClick={e => {
                        setShow(false)
                        onConfirmation(false)
                    }}>x</div>
                </div>
            
                <div className={style.body}>{msg}</div>

                <div className={style.bottom}>

                    <button 
                    className={globalStyle.actionBtn}
                    onClick={e => {
                        setShow(false)
                        onConfirmation(true)

                    }}>Sim</button>

                    <button 
                    className={globalStyle.actionBtn}
                    onClick={e => {
                        setShow(false)
                        onConfirmation(false)

                    }}>Não</button>

                </div>

            </div>

        </div>
    )
}
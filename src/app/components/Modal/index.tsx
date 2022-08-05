
import { useState } from 'react'
import { Container, Content, Top, Body, Bottom} from './style'

interface ModalProps{
    title: string,
    msg: string,
    onConfirmation: (confirmation: boolean) => any
}

export default function Modal({title, msg, onConfirmation}: ModalProps){

    let [show, setShow] = useState(true)

    return (
    <>
    {show &&
        <Container>
            <Content>

                <Top>
                    <div className='title'>{title}</div>

                    <div
                    className='closeBtn'
                    onClick={e => {
                        setShow(false)
                        onConfirmation(false)}}
                    >{'x'}
                    </div>
                </Top>

                <Body>{msg}</Body>

                <Bottom>
                    <button 
                        className='actionBtn'
                        onClick={e => {
                            setShow(false)
                            onConfirmation(true)

                    }}>Sim</button>

                    <button 
                        className='actionBtn'
                        onClick={e => {
                            setShow(false)
                            onConfirmation(false)

                    }}>Não</button>
                </Bottom>

            </Content>
        </Container>
    }
    </>)
}

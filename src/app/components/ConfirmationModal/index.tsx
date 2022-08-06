
import { useEffect, useState } from 'react'
import { Container, Content, Top, Body, Bottom} from './style'

interface ConfirmationModalProps{
    title: string,
    show?: boolean, 
    msg: string,
    onConfirmation?: (confirmation: boolean) => any

}

export default function ConfirmationModal({title, show, msg, onConfirmation}: ConfirmationModalProps){

    return (
    <>
    {
    show &&
        <Container>
            <Content>

                <Top>
                    <div className='title'>{title}</div>

                    <div
                    className='closeBtn'
                    onClick={e => {
                        if(onConfirmation) { onConfirmation(false)} }}

                    >{'x'}
                    </div>
                </Top>

                <Body>
                    {msg}
                </Body>

                <Bottom>
                    <button 
                    className='actionBtn'
                     onClick={e => {
                        if(onConfirmation) { onConfirmation(true) }

                    }}>Sim</button>

                    <button 
                    className='actionBtn'
                    onClick={e => { if(onConfirmation) { onConfirmation(false) }

                    }}>Não</button>
                </Bottom>

            </Content>
        </Container>
    }
    </>)
}

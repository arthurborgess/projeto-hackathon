
import React, { useState } from "react";
import Calendar, { DateCallback } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendario() {

    // data selecionada
    /*const [value, onChange] = useState(new Date());

    const clickDayHandler: DateCallback  = (value, event) => {
        console.log(value, event);

    }*/

    return (

        <div>
            <h3>Calendario</h3>

            <div>
                <div>
                    <p>Dia da Semana</p>
                    <p>Data</p>
                </div>

            </div>

        </div>
    );

}
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarReact() {

    const [value, onChange] = useState(new Date());

    return (
        <div className="card m-20 m-l-0">
            <div className="card-body">
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
    )
}
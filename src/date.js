import React, {useState} from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


function Date () {
    const [selectedDate, setSelectedDate] = useState(null);
    // console.log(selectedDate)

    function twoCalls (date) {
        setSelectedDate(date)
        console.log(date)
    }


    return (
        <div>
            <Datepicker 
            selected={selectedDate} 
            onChange={twoCalls} 
            dateFormat='dd-MM-yyyy'
            />
        </div>
    )
}

export default Date;
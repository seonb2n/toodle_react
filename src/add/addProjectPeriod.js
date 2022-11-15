import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {useState} from "react";
import {addDays} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange"; // theme css file
import './addProjectPeriod.css';

function AddProjectPeriod() {
    const [dayRange, setDayRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ]);

    return (
        <div>
            <DateRange
                weekdayDisplayFormat='eee'
                editableDateInputs={true}
                onChange={(item) => setDayRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dayRange}
                months={1}
                dateDisplayFormat={'yyyy년 MM월 dd일 E'}
            />
        </div>
    )
}

export default AddProjectPeriod;
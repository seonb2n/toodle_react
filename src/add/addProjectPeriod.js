import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {useState} from "react";
import {addDays} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange"; // theme css file
import * as locales from 'react-date-range/dist/locale'
import './addProjectPeriod.css';

function AddProjectPeriod() {
    const [dayRange, setDayRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: "selection",
        },
    ]);

    const getDateDiff = (d1, d2) => {
        const date1 = new Date(d1);
        const date2 = new Date(d2);

        const diffDate = date1.getTime() - date2.getTime();

        return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
    }

    return (
        <div>
            <DateRange
                locale={locales["ko"]}
                editableDateInputs={true}
                onChange={(item) => {
                    setDayRange([item.selection]);
                }}
                moveRangeOnFirstSelection={false}
                ranges={dayRange}
                months={1}
                dateDisplayFormat={'yyyy년 MM월 dd일 E'}
            />
            <div className="w100p flexCenter">
                <div className="addPeriodSubmitButton w90p h50 flexCenterAlignHorizon">
                    <div>
                        <p>{getDateDiff(dayRange[0].endDate, dayRange[0].startDate) + 1}일 동안 하기</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProjectPeriod;
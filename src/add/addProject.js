import {useLocation} from "react-router-dom";
import "../css/base.css"
import "./addProject.css"
import DatePicker from "react-mobile-datepicker";
import {useState} from "react";


function AddProject(props) {
    const location = useLocation();
    let startDate = location.state?.startDay;
    let endDate = location.state?.endDay;
    const [endDay, setEndDay] = useState(new Date(endDate));
    console.log(endDay);
    const [time, setTime] = useState(new Date());
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleSelect = time => {
        setTime(time);
        console.log(time);
        setEndDay(time);
        setIsOpen(false);
    };

    return (
        <div>
            <div className="h50 flex">
                <div className="positionAbs ml20 w70 fs14p">
                    취소
                </div>
                <div className="w100p flexCenter fs14p fBold">
                    프로젝트 추가하기
                </div>
            </div>
            <div className="flex h50">
                <div className="ml20 w70 fBold">
                    이름
                </div>
                <div className="h100p flexCenter">
                    <input className="w270 h50p projectNameInput" placeholder="입력을 완료 했습니다."/>
                </div>
            </div>
            <div className="h50 flex">
                <div className="ml20 w70 fBold">
                    마감날짜
                </div>
                <div>
                    <div className="flexCenter">
                        <p onClick={handleClick}>{endDay.toDateString()} 로 설정됨</p>
                        <img className="ml5 w10 h10"
                             src={isOpen ? "img/today/ic_arrow_up.png" : "img/today/ic_arrow_down.png"}/>
                    </div>
                    <div className={isOpen ? "" : " un_visible"}>
                        <DatePicker
                            value={time}
                            onSelect={handleSelect}
                            onCancel={handleCancel}
                            isPopup={false}
                            showHeader={false}
                            confirmText="OK"
                            cancelText="Cancel"
                            dateConfig={{
                                year: {
                                    format: "YYYY 년",
                                    caption: "Year",
                                    step: 1
                                },
                                month: {
                                    format: "MM 월",
                                    caption: "Mon",
                                    step: 1
                                },
                                date: {
                                    format: "D 일",
                                    caption: "Day",
                                    step: 1
                                }
                            }}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="floatL">
                    색상
                </div>
                <div>
                    색깔 선택
                </div>
            </div>
            <div>
                <div className="floatL">
                    태스크 추가
                </div>
                <div>
                    태스크 입력
                </div>
            </div>
            <div>
                다음
            </div>
        </div>
    );
}

export default AddProject;
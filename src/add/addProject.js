import {useLocation} from "react-router-dom";
import "../css/base.css"
import "./addProject.css"
import DatePicker from "react-mobile-datepicker";
import {useEffect, useState} from "react";
import SetColorDiv from "../common/setColorDiv";
import AddProjectTask from "./addProjectTask";


function AddProject(props) {
    const location = useLocation();
    let startDate = location.state?.startDay;
    let endDate = location.state?.endDay;
    const [endDay, setEndDay] = useState(new Date(endDate));
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

    // 색상 정하는 부분
    const [color, setColor] = useState("#0054FF");

    let colorSetArr = [];
    colorSetArr[0] = "#007cff";
    colorSetArr[1] = "#ff8600";
    colorSetArr[2] = "#00cb48";
    colorSetArr[3] = "#ff3a30";
    colorSetArr[4] = "#43e4c0";
    colorSetArr[5] = "#5d5ce6";
    colorSetArr[6] = "#fe2987";
    colorSetArr[7] = "#db6aff";
    colorSetArr[8] = "#407190";
    colorSetArr[9] = "#fec912";
    const [isClickedArr, setIsClickedArr] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]);

    const onSetColorClick = (e) => {
        e.preventDefault();
        const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`;
        setColor(rgba2hex(e.target.style.backgroundColor));
    }

    useEffect(() => {
        let tmpClickedArr = []
        for (let i = 0; i < colorSetArr.length; i++) {
            tmpClickedArr[i] = color === colorSetArr[i];
        }
        setIsClickedArr(tmpClickedArr);
    }, [color])

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
                    <input className="w250 h50p projectNameInput" placeholder="입력을 완료 했습니다."/>
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
            <div className="h50 flex">
                <div className="ml20 w70 fBold">
                    색상
                </div>
                <div>
                    <div className="flex">
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[0]} isClicked={isClickedArr[0]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[1]} isClicked={isClickedArr[1]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[2]} isClicked={isClickedArr[2]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[3]} isClicked={isClickedArr[3]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[4]} isClicked={isClickedArr[4]}/>
                        </div>
                    </div>
                    <div className="flex">
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[5]} isClicked={isClickedArr[5]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[6]} isClicked={isClickedArr[6]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[7]} isClicked={isClickedArr[7]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[8]} isClicked={isClickedArr[8]}/>
                        </div>
                        <div onClick={onSetColorClick}>
                            <SetColorDiv color={colorSetArr[9]} isClicked={isClickedArr[9]}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt10">
                <div className="ml20 w70 fBold">
                    태스크 추가
                </div>
                <div>
                    <div className="h32">
                        <AddProjectTask importance="HIGH" taskName="태스크를 입력한 상태입니다."/>
                    </div>
                    <div>
                        <input />
                        <div>
                            <div>
                                <img src="img/today/ic_importance_high_black.png"/>
                                <p>높음</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nextBtnWrapper flexCenterAlignHorizon">
                <div className="nextBtn flexCenter fBold fs16p">
                    추가하기
                </div>
                
            </div>
        </div>
    );
}

export default AddProject;
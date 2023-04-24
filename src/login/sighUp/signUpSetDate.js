import {useLocation} from "react-router-dom";
import "../../css/base.css"
import {useState} from "react";
import {TimePicker} from 'react-ios-time-picker';

function SignUpSetDate() {
    const location = useLocation();
    const userEmail = location.state.userEmail;
    const userPW = location.state.userPW;
    const userNickName = location.state.userNickName;

    const [startTime, setStartTime] = useState('09:00');
    const onChangeStartTime = (timeValue) => {
        setStartTime(timeValue);
    }

    const [endTime, setEndTime] = useState('18:00');
    const onChangeEndTime = (timeValue) => {
        setEndTime(timeValue);
    }


    function checkStartEndTimeDiff() {
        const [hours1, minutes1] = startTime.split(':');
        const [hours2, minutes2] = endTime.split(':');

        const startDate = new Date();
        startDate.setHours(hours1, minutes1, 0, 0); // 첫 번째 시간을 Date 객체로 변환
        const endDate = new Date();
        endDate.setHours(hours2, minutes2, 0, 0); // 두 번째 시간을 Date 객체로 변환
        const timeDiffInMs = endDate - startDate; // 두 시간의 차이를 밀리초로 계산

        const hoursDiff = timeDiffInMs / (1000 * 60 * 60) // 시간 차이를 구함
        return hoursDiff >= 1;
    }

    const [isNextBtnClick, setIsNextBtnClick] = useState(false);

    const nextBtnClick = () => {
        if (!checkStartEndTimeDiff()) {
            setIsNextBtnClick(true);
        }
        // todo 서버로 회원 가입 요청 보냄
    }

    return (
        <div>
            <div className="title_area ">
                <p className="fBold title_txt">Welcome,</p>
                <div className="flex w100p">
                    <div className="fBold title_txt">TOODLE</div>
                    <div className="ml10 title_dot_container">
                        <div className="bgLightOrange title_dot"></div>
                    </div>
                </div>
            </div>

            <div className="main_area ml20 mr20 mt15">

                <div className="fs16p fBold">
                    <div>
                        {userNickName} 님.
                    </div>
                    <div>
                        <p>
                            하루의 시작과 종료를 설정할까요?
                        </p>
                    </div>
                </div>

                <div className="mt30 fs20p">
                    <div className="flex">
                        <div>하루의</div>
                        <div className="ml5 fc_lo">시작 시간은</div>
                    </div>
                </div>

                <div className="time_picker">
                    <TimePicker onChange={onChangeStartTime} value={startTime} />
                </div>

                <div className="mt30 fs20p">
                    <div className="flex">
                        <div>하루의</div>
                        <div className="ml5 fc_lo">종료 시간은</div>
                    </div>
                </div>

                <div className="time_picker">
                    <TimePicker onChange={onChangeEndTime} value={endTime} />
                </div>

                <div className={checkStartEndTimeDiff() ? "mt5 un_visible" : "mt5 fc_lo fs14p"}>
                    <p>시작과 종료시간은 최소 1시간 이상 차이가 나야해요.</p>
                </div>

                <div className="mt30 fc_gr">
                    <p>하루의 시작과 종료 시간 설정은,</p>
                    <p>계획을 세울 때 더 빠르게 세울 수 있도록 도와줘요 :-)</p>
                </div>

            </div>

            <div
                className={isNextBtnClick ? "basic_next_round_button_clicked h52 flexCenterAlignHorizon ml15 mr15" : "basic_next_round_button h52 flexCenterAlignHorizon ml15 mr15"}
                onClick={nextBtnClick}>
                <div className="flex fBold fs16p">
                    <img className="mr5"
                         src={isNextBtnClick ? "img/signup/ic_check_orange.png" : "img/signup/ic_check_white.png"}/>
                    <p>설정하고 시작하기</p>
                </div>
            </div>

        </div>
    );
}

export default SignUpSetDate;
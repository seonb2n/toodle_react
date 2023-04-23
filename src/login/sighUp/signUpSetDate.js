import {useLocation} from "react-router-dom";
import "../../css/base.css"
import {useState} from "react";
import { TimePicker } from 'react-ios-time-picker';

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
            </div>


        </div>
    );
}

export default SignUpSetDate;
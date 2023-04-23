import {useLocation, useNavigate} from "react-router-dom";
import "../../css/base.css";
import "./signUpNickName.css";
import {useState} from "react";

function SignUpNickName() {

    const navigate = useNavigate();
    const location = useLocation();
    const userEmail = location.state.userEmail;
    const userPW = location.state.userPW;

    const HIDDEN_CLASSNAME = "hidden";
    const [isNickNameInputFocus, setIsNickNameInputFocus] = useState(false);
    const nicknameFocus = () => {
        setIsNickNameInputFocus(!isNickNameInputFocus);
    }

    const [errorShown, setErrorShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const [isNextBtnClick, setIsNextBtnClick] = useState(false);
    const nextBtnClick = () => {
        setIsNextBtnClick(true);
        const userNickName = document.getElementById("user_nickname_input").value;

        const isValid = /^[a-zA-Z가-힣]{2,8}$/.test(userNickName);

        if (isValid) {
            navigate('/signUpSetDate', {
                state: {
                    userEmail: userEmail,
                    userPW: userPW,
                    userNickName: userNickName
                }
            })
        } else {
            setErrorShown(true);
            setErrorMessage("닉네임 형식이 규격에 맞지 않습니다.");
        }

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

            <div className="signup_nickname ml20 mr20 mt20">
                <input onFocus={nicknameFocus} onBlur={nicknameFocus}
                       id="user_nickname_input" className="basic_input" type="email"
                       placeholder="닉네임 입력"/>
                <hr className={"basic_input_focus_line " + (isNickNameInputFocus ? '' : HIDDEN_CLASSNAME)}/>

                <div className="mt20 basic_input_notify_box">
                    닉네임은 2자 이상 8자 미만으로 입력가능해요.
                </div>
                <p className={errorShown ? "h20 fc_lo " : "h20 un_visible"}>{errorMessage}</p>
            </div>

            <div
                className={isNextBtnClick ? "basic_next_round_button_clicked h52 flexCenterAlignHorizon ml15 mr15" : "basic_next_round_button h52 flexCenterAlignHorizon ml15 mr15"}
                onClick={nextBtnClick}>
                <div className="flex fBold fs16p">
                    <p>다음</p>
                    <img className="ml5"
                         src="img/signup/ic_next_default.png"/>
                </div>
            </div>
        </div>
    );
}

export default SignUpNickName;
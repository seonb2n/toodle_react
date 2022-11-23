import BackButton from "../../common/backButton";
import "../../css/base.css";
import "./signUpEmail.css";
import {useRef, useState} from "react";
import {Radio} from "@mui/material";

function SignUpEmail() {
    const HIDDEN_CLASSNAME = "hidden";

    const [showPassword, setShowPassword] = useState(false);
    const showPasswordRef1 = useRef();
    const showPasswordRef2 = useRef();
    const showPasswordImgClicked = () => {
        setShowPassword(!showPassword);
        showPasswordRef1.current.src
            = (showPassword ? "img/login/ic_task_look_off.png" : "img/login/ic_task_look_on.png");
        showPasswordRef2.current.src
            = (showPassword ? "img/login/ic_task_look_off.png" : "img/login/ic_task_look_on.png");
    }

    const [isEmailFocus, setIsEmailFocus] = useState(false);
    const emailFocus = () => {
        setIsEmailFocus(!isEmailFocus);
    }

    const [isPwFocus, setIsPwFocus] = useState(false);
    const pwdFocus = () => {
        setIsPwFocus(!isPwFocus);
    }

    const [isPwConfirmFocus, setIsPwConfirmFocus] = useState(false);
    const pwdConfirmFocus = () => {
        setIsPwConfirmFocus(!isPwFocus);
    }

    const [isSignUpFailed, setIsSignUpFailed] = useState(false);

    const [isShowPolicy, setIsShowPolicy] = useState(false);
    const showPolicyBtnClicked = () => {
        setIsShowPolicy(!isShowPolicy);
    }

    return (
        <div>
            <BackButton link="/login"/>

            <div className="ml15 mr15">
                <div>
                    <div className="bgLightOrange title_oval zIndex1"></div>
                    <p className="fBold zIndex2 positionRel title_txt">Sign up</p>
                </div>

                <div className="signUpInputForm mt30">
                    <form>
                        <div className="signup_email">
                            <input onFocus={emailFocus} onBlur={emailFocus} className="signup_email_input" type="email"
                                   placeholder="이메일 입력"/>
                            <hr className={"login_email_focus_line " + (isEmailFocus ? '' : HIDDEN_CLASSNAME)}/>
                        </div>
                        <div className="signup_password">
                            <img onClick={showPasswordImgClicked} ref={showPasswordRef1}
                                 src="img/login/ic_task_look_off.png"/>
                            <input onFocus={pwdFocus} onBlur={pwdFocus} className="signup_password_input"
                                   type={showPassword ? "text" : "password"} placeholder="비밀번호 입력"/>
                            <hr className={"login_password_focus_line " + (isPwFocus ? '' : HIDDEN_CLASSNAME)}/>
                        </div>
                        <div className="signup_password_confirm">
                            <img onClick={showPasswordImgClicked} ref={showPasswordRef2}
                                 src="img/login/ic_task_look_off.png"/>
                            <input onFocus={pwdConfirmFocus} onBlur={pwdFocus} className="signup_password_input"
                                   type={showPassword ? "text" : "password"} placeholder="비밀번호 확인"/>
                            <hr className={"login_password_focus_line " + (isPwConfirmFocus ? '' : HIDDEN_CLASSNAME)}/>
                        </div>
                        <div className={"signup_info_text " + (!isSignUpFailed ? '' : HIDDEN_CLASSNAME)}>
                            <p>비밀번호는 4자 이상 20자 미만, 영문과 숫자를 포함해주세요.</p>
                            <p>입력 시, 대소문자를 구별하며</p>
                            <p>특수문자는 ~!@#$%^&*_-를 입력할 수 있어요.</p>
                        </div>
                    </form>
                </div>

                <div className="signUpPolicy mt40">
                    <div>
                        <div className="flex">
                            <Radio/>
                            <div>*</div>
                            <div>서비스 이용 약관동의</div>
                            <img className="w25 h20" src="img/today/ic_arrow_down.png" onClick={showPolicyBtnClicked}/>
                        </div>
                        <div className={isShowPolicy ? "policyBox " : "policyBox hidden"}>
                            <p>
                                제 1조(목적) <br/>
                                본 약관은 ㈜크래커박스(이하 “회사”)가 운영하는 온라인상의 인터넷 서비스의 이용과 관련하여 "회사"와 이용자와의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.<br/>
                                제 2조(용어의 정의) <br/>
                                ① “서비스”라 함은 접속 가능한 유/무선 정보통신기기의 종류와는 상관없이 이용 가능한 “회사”가 제공하는 모든 서비스를 의미합니다. <br/>
                                ② “이용자”라 함은 “회사”가 운영하는 온라인상의 웹사이트에 접속하여 본 약관에 따라 회사가 제공하는 콘텐츠 및 제반 서비스를 이용하는 회원 및 비회원을 말합니다.
                            </p>
                        </div>
                    </div>


                </div>
            </div>

            <div className="signUpButton">

            </div>
        </div>
    );
}

export default SignUpEmail;
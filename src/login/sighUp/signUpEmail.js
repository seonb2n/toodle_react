import BackButton from "../../common/backButton";
import "../../css/base.css";
import "./signUpEmail.css";
import {useRef, useState} from "react";
import {Radio} from "@mui/material";

function SignUpEmail() {
    const HIDDEN_CLASSNAME = "hidden";
    const dropdownDownImg = "img/signup/ic_dropdowndown.png";
    const dropdownUpImg = "img/signup/ic_dropdownup.png";

    const emailErrorMsg = "이메일 형식이 옳지 않습니다.";
    const pwErrorMsg = "비밀번호 형태가 옳지 않습니다..";
    const pwConfirmErrorMsg = "비밀번호가 일치하지 않습니다.";
    const emailConfirmErrorMsg = "이미 가입된 적이 있는 이메일입니다.";

    const [errorShown, setErrorShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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
    const [policyDropDownImgSrc, setPolicyDropDownImgSrc] = useState(dropdownDownImg);
    const showPolicyBtnClicked = () => {
        setIsShowPolicy(!isShowPolicy);
        if (policyDropDownImgSrc === dropdownDownImg) {
            setPolicyDropDownImgSrc(dropdownUpImg);
        } else {
            setPolicyDropDownImgSrc(dropdownDownImg);
        }
    }

    const [isShowPrivate, setIsShowPrivate] = useState(false);
    const [privateDropDownImgSrc, setPrivateDropDownImgSrc] = useState(dropdownDownImg);
    const showPrivateBtnClicked = () => {
        setIsShowPrivate(!isShowPrivate);
        if (privateDropDownImgSrc === dropdownDownImg) {
            setPrivateDropDownImgSrc(dropdownUpImg);
        } else {
            setPrivateDropDownImgSrc(dropdownDownImg);
        }
    }

    function email_check(email) {
        const regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email !== '' && email !== 'undefined' && regex.test(email));
    }

    function pw_check(pw) {
        const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/;
        return (pw !== '' && pw !== 'undefined' && pwRegex.test(pw));
    }

    const [signUpBtnClick, setSignUpBtnClick] = useState(false);

    const signupBtnClicked = () => {
        setSignUpBtnClick(true);
        const idVal = document.getElementById("email_input").value;
        if (!email_check(idVal)) {
            setErrorShown(true);
            setErrorMessage(emailErrorMsg);
            return;
        }

        const pwVal = document.getElementById("pw_input").value;
        if (!pw_check(pwVal)) {
            setErrorShown(true);
            setErrorMessage(pwErrorMsg);
            return;
        }

        const pwConfirmVal = document.getElementById("pw_confirm_input").value;
        if (pwVal !== pwConfirmVal) {
            setErrorShown(true);
            setErrorMessage(pwConfirmErrorMsg);
            return;
        }

        const policyAgree = document.getElementById("policy_agree").checked;
        const privateAgree = document.getElementById("private_agree").checked;

        // fetch 를 통해 서버에 요청 전송
        // 가입된 이메일일 경우 error msg 출력

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
                            <input onFocus={emailFocus} onBlur={emailFocus} id="email_input"
                                   className="signup_email_input" type="email"
                                   placeholder="이메일 입력"/>
                            <hr className={"login_email_focus_line " + (isEmailFocus ? '' : HIDDEN_CLASSNAME)}/>
                        </div>
                        <div className="signup_password">
                            <img onClick={showPasswordImgClicked} ref={showPasswordRef1}
                                 src="img/login/ic_task_look_off.png"/>
                            <input onFocus={pwdFocus} onBlur={pwdFocus} id="pw_input" className="signup_password_input"
                                   type={showPassword ? "text" : "password"} placeholder="비밀번호 입력"/>
                            <hr className={"login_password_focus_line " + (isPwFocus ? '' : HIDDEN_CLASSNAME)}/>
                        </div>
                        <div className="signup_password_confirm">
                            <img onClick={showPasswordImgClicked} ref={showPasswordRef2}
                                 src="img/login/ic_task_look_off.png"/>
                            <input onFocus={pwdConfirmFocus} onBlur={pwdFocus} id="pw_confirm_input"
                                   className="signup_password_input"
                                   type={showPassword ? "text" : "password"} placeholder="비밀번호 확인"/>
                            <hr className={"login_password_focus_line " + (isPwConfirmFocus ? '' : HIDDEN_CLASSNAME)}/>
                        </div>
                        <div className={"signup_info_text " + (!isSignUpFailed ? '' : HIDDEN_CLASSNAME)}>
                            <p>비밀번호는 4자 이상 20자 미만, 영문과 숫자를 포함해주세요.</p>
                            <p>입력 시, 대소문자를 구별하며</p>
                            <p>특수문자는 ~!@#$%^&*_-를 입력할 수 있어요.</p>
                        </div>
                        <p className={errorShown ? "h20 fc_lo " : "h20 un_visible"}>{errorMessage}</p>
                    </form>
                </div>

                <div className="signup_policy mt20">
                    <div>
                        <div className="signup_policy_service_box flexAlignHorizon">
                            <Radio id="policy_agree" sx={{
                                '&.Mui-checked': {
                                    color: '#ff8445'
                                }
                            }}/>
                            <div className="fs16p">*</div>
                            <p className="fs16p">서비스 이용 약관동의</p>
                            <img className="w25 h20" src={policyDropDownImgSrc} onClick={showPolicyBtnClicked}/>
                        </div>
                        <div className={isShowPolicy ? "policyBox " : "policyBox display_none"}>
                            <p>
                                제 1조(목적) <br/>
                                본 약관은 ㈜크래커박스(이하 “회사”)가 운영하는 온라인상의 인터넷 서비스의 이용과 관련하여 "회사"와 이용자와의 권리, 의무 및 책임사항을 규정함을 목적으로
                                합니다.<br/>
                                제 2조(용어의 정의) <br/>
                                ① “서비스”라 함은 접속 가능한 유/무선 정보통신기기의 종류와는 상관없이 이용 가능한 “회사”가 제공하는 모든 서비스를 의미합니다. <br/>
                                ② “이용자”라 함은 “회사”가 운영하는 온라인상의 웹사이트에 접속하여 본 약관에 따라 회사가 제공하는 콘텐츠 및 제반 서비스를 이용하는 회원 및 비회원을
                                말합니다.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="signup_policy_service_box flexAlignHorizon">
                            <Radio id="private_agree" sx={{
                                '&.Mui-checked': {
                                    color: '#ff8445'
                                }
                            }}/>                            <div className="fs16p">*</div>
                            <p className="fs16p">개인정보 처리 방침 동의</p>
                            <img className="w25 h20" src={privateDropDownImgSrc} onClick={showPrivateBtnClicked}/>
                        </div>
                        <div className={isShowPrivate ? "policyBox " : "policyBox hidden"}>
                            <p>
                                제 1조(목적) <br/>
                                본 약관은 ㈜크래커박스(이하 “회사”)가 운영하는 온라인상의 인터넷 서비스의 이용과 관련하여 "회사"와 이용자와의 권리, 의무 및 책임사항을 규정함을 목적으로
                                합니다.<br/>
                                제 2조(용어의 정의) <br/>
                                ① “서비스”라 함은 접속 가능한 유/무선 정보통신기기의 종류와는 상관없이 이용 가능한 “회사”가 제공하는 모든 서비스를 의미합니다. <br/>
                                ② “이용자”라 함은 “회사”가 운영하는 온라인상의 웹사이트에 접속하여 본 약관에 따라 회사가 제공하는 콘텐츠 및 제반 서비스를 이용하는 회원 및 비회원을
                                말합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={signUpBtnClick ? "signup_button_clicked h52 flexCenterAlignHorizon ml15 mr15" : "signup_button h52 flexCenterAlignHorizon ml15 mr15"} onClick={signupBtnClicked}>
                <div className="flex fBold fs16p">
                    <img className="mr5" src={signUpBtnClick ? "img/signup/ic_check_orange.png" :"img/signup/ic_check_white.png"}/>
                    <p>회원가입하기</p>
                </div>
            </div>
        </div>
    );
}

export default SignUpEmail;
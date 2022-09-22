import "./loginStyle.css";
import {useRef, useState} from "react";

function Login() {
    const HIDDEN_CLASSNAME = "hidden";

    const [showPassword, setShowPassword] = useState(false);
    const showPasswordRef = useRef();
    const showPasswordImgClicked = () => {
        setShowPassword(!showPassword);
        showPasswordRef.current.src
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

    const [userData, setUserData] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPwd, setUserPwd] = useState();

    const onChangeEmail = (event) => {
        setUserEmail(event.target.value);
    }

    const onChangePwd = (event) => {
        setUserPwd(event.target.value);
    }

    const loginBtnClicked = async (event) => {
        event.preventDefault();
        const json = await (
            await fetch("http://192.168.35.4:8080/api/v1/users/login", {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: 'follow',
                body: JSON.stringify({
                    userEmail: userEmail,
                    password: userPwd,
                }),
            }).then((response) => {
                    if (response.status !== 200) {
                        throw new Error();
                    }
                    return response.json();
                }
            )
        )
        setUserData(json.data);
        console.log(userData);
        alert("Welcome! [" + userData.userNickName + "]");
    }

    return (
        <div>
            <div className="reset_wrapper">
                <div className="reset_title">
                    <h1>TOODLE</h1>
                </div>
                <form>
                    <div className="reset_email">
                        <input onFocus={emailFocus} onBlur={emailFocus} onChange={onChangeEmail} className="login_email_input" type="email"
                               placeholder="이메일 입력"/>
                        <hr className={"login_email_focus_line " + (isEmailFocus ? '' : HIDDEN_CLASSNAME)}/>
                    </div>
                    <div className="login_password">
                        <img onClick={showPasswordImgClicked} ref={showPasswordRef}
                             src="img/login/ic_task_look_off.png"/>
                        <input onFocus={pwdFocus} onBlur={pwdFocus} onChange={onChangePwd} className="login_password_input"
                               type={showPassword ? "text" : "password"} placeholder="비밀번호 입력"/>
                        <hr className={"login_password_focus_line " + (isPwFocus ? '' : HIDDEN_CLASSNAME)}/>
                    </div>
                    <div className="hidden reset_info_text">
                        <p>아이디 또는 비밀번호가 옳바르지 않아요.</p>
                    </div>
                    <div onClick={loginBtnClicked} className="reset_form_submit_button">
                        <div className="reset_form_submit_button_text">
                            <img src="img/login/ic_check_white.png"/>
                            <h3>로그인</h3>
                        </div>
                        <input type="submit" value=""/>
                    </div>
                </form>
            </div>

            <div className="findAndJoinBtnWrapper">
                <div className="findPasswordBtn">
                    비밀번호 찾기
                </div>

                <hr/>

                <div className="joinWithEmailBtn">
                    이메일 회원가입
                </div>
            </div>

            <div className="socialLoginText">
                <p>소셜 로그인/가입</p>
            </div>

            <div className="socialLoginBtnWrapper">
                <div className="googleLoginBtn">
                    <img src="img/login/m_ic_sn_google.png"/>
                </div>

                <div className="naverLoginBtn">
                    <img src="img/login/m_ic_sn_naver.png"/>
                </div>

                <div className="kakaoLoginBtn">
                    <img src="img/login/m_ic_sn_kakao.png"/>
                </div>
            </div>
        </div>);
}

export default Login;
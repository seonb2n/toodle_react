import "./loginStyle.css";
import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";

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

    const [isLoginFailed, setIsLoginFailed] = useState(false);

    // todo 클라이언트에서 할거 with WEB
    // 1. 아키텍쳐 - API call, dto, service pattern, routing, value preserve life cycle etc
    // 2. 뷰 짜기 - 개인기(css)
    // 3. 응용 - view recyclable : important!
    // 4. 애니메이션, 유저 상호작용 : drag and drop, enter submit, swipe, scroll
    // 5. 속도 : rendering speed, animation speed, device issue

    //todo then 패턴은 탭의 증가가 있으니 탭을 부셔보자.
    //status 코드를 기반으로 분기를 안하고, response 자체에 코드 값이 있어야 한다.
    const loginBtnClicked = async (event) => {
        event.preventDefault();
        setIsLoginFailed(false);
        AuthenticationService.executeJwtAuthenticationService(userEmail, userPwd)
            .then((response) => {
                console.log(response);
                AuthenticationService.registerSuccessfulLoginForJwt(userEmail, response.data.jwtToken);
                window.location.href = "/postit";
            }).catch(() => {
                setIsLoginFailed(true);
        })
    }

    return (
        <div>
            <div className="login_wrapper">
                <div className="login_title">
                    <h1>TOODLE</h1>
                </div>
                <form>
                    <div className="login_email">
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
                    <div className={"login_info_text " + (isLoginFailed ? '' : HIDDEN_CLASSNAME)}>
                        <p>아이디 또는 비밀번호가 옳바르지 않아요.</p>
                    </div>
                    <div onClick={loginBtnClicked} className="login_form_submit_button">
                        <div className="login_form_submit_button_text">
                            <img src="img/login/ic_check_white.png"/>
                            <h3>로그인</h3>
                        </div>
                        <input type="submit" value=""/>
                    </div>
                </form>
            </div>

            <div className="findAndJoinBtnWrapper">
                <Link to="/passwordReset">
                    <div className="findPasswordBtn">
                        비밀번호 찾기
                    </div>
                </Link>
                <hr/>

                <Link to="/signUp">
                    <div className="joinWithEmailBtn">
                        이메일 회원가입
                    </div>
                </Link>

            </div>

            <div className="socialLoginText">
                <p>소셜 로그인/가입</p>
            </div>

            <div className="socialLoginBtnWrapper">
                <div className="googleLoginBtn">
                    <img src="img/login/m_ic_sn_google.png"/>
                </div>

                <a href={AuthenticationService.API_SERVER_URL + "/oauth2/authorization/naver"}>
                    <div className="naverLoginBtn">
                        <img src="img/login/m_ic_sn_naver.png"/>
                    </div>
                </a>


                <div className="kakaoLoginBtn">
                    <img src="img/login/m_ic_sn_kakao.png"/>
                </div>
            </div>
        </div>);
}

export default Login;
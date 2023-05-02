import "./passwordResetStyle.css";
import "../../css/base.css"
import {useNavigate} from "react-router-dom";
import BackButton from "../../common/backButton";
import AuthenticationService from "../../service/AuthenticationService";
import {useState} from "react";

function PasswordReset() {

    const navigate = useNavigate();
    const emailEmptyMsg = "이메일을 입력해주세요.";
    const emailFormMsg = "이메일 형식이 옳바르지 않습니다.";
    const emailErrorMsg = "가입된 적이 없는 이메일입니다.";

    const [errorShown, setErrorShown] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const sendPasswordChangeEmail = () => {
        const userEmail = document.getElementById("user_email_input").value;

        if (userEmail === "") {
            setErrorShown(true);
            setErrorMessage(emailEmptyMsg);
            return;
        }

        if (!email_check(userEmail)) {
            setErrorShown(true);
            setErrorMessage(emailFormMsg);
            return;
        }

        AuthenticationService.changeUserPassword(userEmail)
            .then((response ) => {
                console.log(response);
                navigate('/passwordResetResult', {});
            }).catch(() => {
                setErrorShown(true);
                setErrorMessage(emailErrorMsg);
        })
    }

    function email_check(email) {
        const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return (email !== '' && email !== 'undefined' && regex.test(email));
    }

    return (
        <div>
            <BackButton link="/login"/>

            <div className="reset_wrapper">
                <div className="reset_title">
                    <h1>
                        Password
                    </h1>
                    <h1 className="reset_title_btm">
                        Reset
                    </h1>
                    <div className="reset_title_oval">

                    </div>
                </div>
                <form>
                    <div className="reset_email">
                        <input id="user_email_input" className="reset_email_input" type="email" placeholder="이메일 입력"/>
                        <hr className="login_email_focus_line hidden"/>
                    </div>
                    <div className="reset_info_text">
                        <p>가입하신 이메일로 비밀번호 변경 링크를 보내드려요.</p>
                    </div>
                    <p className={errorShown ? "h20 fc_lo " : "h20 un_visible"}>{errorMessage}</p>
                    <div className="reset_form_submit_button">
                        <div className="reset_form_submit_button_text" onClick={sendPasswordChangeEmail}>
                            <img src="img/login/ic_check_white.png"/>
                            <h3>메일보내기</h3>
                        </div>
                        <input type="submit" value=""/>
                    </div>
                </form>
            </div>
        </div>);
}

export default PasswordReset;
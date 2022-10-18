import "./passwordResetStyle.css";
import "../../css/base.css"
import {Link} from "react-router-dom";

function PasswordReset() {
    return (
        <div>
            <div className="w100p h50 flexAlignHorizon">
                <Link to="/login">
                    <div className="back_button">
                        <img src="img/login/ic_back_black.png"/>
                    </div>
                </Link>
            </div>

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
                        <input className="reset_email_input" type="email" placeholder="이메일 입력"/>
                        <hr className="login_email_focus_line hidden"/>
                    </div>
                    <div className="reset_info_text">
                        <p>가입하신 이메일로 비밀번호 변경 링크를 보내드려요.</p>
                    </div>
                    <Link to="/passwordResetResult">
                        <div className="reset_form_submit_button">
                            <div className="reset_form_submit_button_text">
                                <img src="img/login/ic_check_white.png"/>
                                <h3>메일보내기</h3>
                            </div>
                            <input type="submit" value=""/>
                        </div>
                    </Link>
                </form>
            </div>
        </div>);
}

export default PasswordReset;
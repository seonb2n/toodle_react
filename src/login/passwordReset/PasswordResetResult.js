import "./passwordResetResultStyle.css";
import {Link} from "react-router-dom";

function PasswordResetResult() {
    return (<div className="reset_wrapper">
        <div className="reset_title">
            <h1>
                Check,
            </h1>
            <h1 className="reset_title_btm">
                E-mail
            </h1>
            <div className="reset_title_oval">

            </div>
        </div>
        <div className="reset_email">
            <p>가입한 이메일로</p>
            <p>비밀번호 변경 링크를 보내드렸어요.</p>
        </div>
        <div className="reset_info_text">
            <p>메일이 도착하지 않는 경우,</p>
            <p>스팸처리가 되지는 않았는지 확인해보고</p>
            <p>같은 문제가 반복되면 문의해주세요</p>
        </div>
        <Link to="/login">
            <div className="reset_form_back_home_button">
                <div className="reset_form_back_home_button_text">
                    <h3>홈으로 돌아가기</h3>
                    <img src="img/login/ic_next_active.png"/>
                </div>
                <input type="submit" value=""/>
            </div>
        </Link>
    </div>);
}

export default PasswordResetResult;
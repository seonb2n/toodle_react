import { useLocation } from "react-router-dom";
import "../../css/base.css";
import "./signUpNickName.css";

function SignUpNickName() {

    const location = useLocation();
    const userEmail = location.state.userEmail;
    const userPW = location.state.userPW;

    console.log(userEmail);
    console.log(userPW);

    return (
        <div>
            <div className="title_area">
                <p className="fBold title_txt">Welcome</p>
                <div className="flex w100p">
                    <div className="fBold title_txt">TOODLE</div>
                    <div className="ml10 title_dot_container">
                        <div className="bgLightOrange title_dot"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpNickName;
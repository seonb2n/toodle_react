import { useLocation } from "react-router-dom";


function SignUpNickName() {

    const location = useLocation();
    const userEmail = location.state.userEmail;
    const userPW = location.state.userPW;

    console.log(userEmail);
    console.log(userPW);

    return (
        <div>
            <div>
                <div className="bgLightOrange title_oval zIndex1"></div>
                <p className="fBold zIndex2 positionRel title_txt">Sign up</p>
            </div>
        </div>
    );
}

export default SignUpNickName;
import {useLocation} from "react-router-dom";

function SignUpSetDate() {
    const location = useLocation();
    const userEmail = location.state.userEmail;
    const userPW = location.state.userPW;
    const userNickName = location.state.userNickName;

    console.log(userNickName);

    return (
        <div>

        </div>
    );
}

export default SignUpSetDate;
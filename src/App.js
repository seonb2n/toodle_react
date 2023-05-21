import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./login/login";
import PasswordReset from "./login/passwordReset/passwordReset";
import PasswordResetResult from "./login/passwordReset/PasswordResetResult";
import Today from "./today/today";
import PostItList from "./postIt/postItList";
import TodayAdd from "./today/todayAdd";
import AddProjectPeriod from "./today/add/addProjectPeriod";
import AddProject from "./today/add/addProject";
import SignUpEmail from "./login/sighUp/signUpEmail";
import SignUpNickName from "./login/sighUp/signUpNickName";
import SignUpSetDate from "./login/sighUp/signUpSetDate";
import NaverLoginRedirect from "./login/NaverLoginRedirect";

function App() {
    return <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUpEmail />}/>
            <Route path="/signUpNickName" element={<SignUpNickName />}/>
            <Route path="/signUpSetDate" element={<SignUpSetDate />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
            <Route path="/passwordResetResult" element={<PasswordResetResult />} />
            <Route path="/today" element={<Today />} />
            <Route path="/todayAdd" element={<TodayAdd />} />
            <Route path="/postit" element={<PostItList />} />
            <Route path="/addProjectPeriod" element={<AddProjectPeriod />} />
            <Route path="/addProject" element={<AddProject />} />
            <Route path="/oauth2/naver/redirect/" element={<NaverLoginRedirect />}/>
        </Routes>
    </Router>
}

export default App;

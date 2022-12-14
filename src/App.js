import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./login/login";
import PasswordReset from "./login/passwordReset/passwordReset";
import PasswordResetResult from "./login/passwordReset/PasswordResetResult";
import Today from "./today/today";
import PostItList from "./postIt/postItList";
import TodayAdd from "./today/todayAdd";
import AddProjectPeriod from "./add/addProjectPeriod";
import AddProject from "./add/addProject";
import SignUpEmail from "./login/sighUp/signUpEmail";

function App() {
    return <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signUp">
                <SignUpEmail />
            </Route>
            <Route path="/passwordReset">
                <PasswordReset />
            </Route>
            <Route path="/passwordResetResult">
                <PasswordResetResult />
            </Route>
            <Route path="/today">
                <Today />
            </Route>
            <Route path="/todayAdd">
                <TodayAdd />
            </Route>
            <Route path="/postit">
                <PostItList />
            </Route>
            <Route path="/addProjectPeriod">
                <AddProjectPeriod />
            </Route>
            <Route path="/addProject">
                <AddProject />
            </Route>
        </Switch>
    </Router>
}

export default App;

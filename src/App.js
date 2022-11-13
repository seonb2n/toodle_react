import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./login/login";
import PasswordReset from "./login/passwordReset/passwordReset";
import PasswordResetResult from "./login/passwordReset/PasswordResetResult";
import Today from "./today/today";
import PostItList from "./postIt/postItList";
import TodayAdd from "./today/todayAdd";

function App() {
    return <Router>
        <Switch>
            <Route path="/login">
                <Login />
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
        </Switch>
    </Router>
}

export default App;

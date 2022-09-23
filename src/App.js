import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./login/login";
import PasswordReset from "./login/passwordReset/passwordReset";
import PasswordResetResult from "./login/passwordReset/PasswordResetResult";

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
        </Switch>
    </Router>
}

export default App;

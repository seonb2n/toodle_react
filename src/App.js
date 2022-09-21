import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./login/login";

function App() {
    return <Router>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
    </Router>
}

export default App;

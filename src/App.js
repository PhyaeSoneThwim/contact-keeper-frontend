import React from "react";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Statistics from "./pages/statistics";
import Contacts from "./pages/contacts";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;

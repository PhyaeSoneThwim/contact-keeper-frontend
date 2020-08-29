import React from "react";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trash from "./pages/transh";
import Contacts from "./pages/contacts";
import AuthState from "./context/auth/authState";
function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/trash" component={Trash} />
          <Route path="/" component={Contacts} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;

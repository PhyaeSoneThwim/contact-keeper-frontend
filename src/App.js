import React from "react";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trash from "./pages/transh";
import Contacts from "./pages/contacts";
import AuthState from "./context/auth/authState";
import PrivateRoute from "./route/privateRoute";
function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/trash" component={Trash} />
          <PrivateRoute path="/" component={Contacts} />
        </Switch>
      </Router>
    </AuthState>
  );
}

export default App;

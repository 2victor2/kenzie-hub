import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
  </Switch>
);

export default Routes;

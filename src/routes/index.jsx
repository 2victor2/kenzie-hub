import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = ({ auth, setAuth, techs, setTechs, user, setUser }) => (
  <AnimatePresence>
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} setUser={setUser} />
      </Route>
      <Route path="/register">
        <Register auth={auth} />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          auth={auth}
          setAuth={setAuth}
          techs={techs}
          setTechs={setTechs}
          user={user}
        />
      </Route>
    </Switch>
  </AnimatePresence>
);

export default Routes;

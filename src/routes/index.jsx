import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routes = ({ techs, setTechs, }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:userToken");

    if (token) setAuth(true);
  }, []);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Login auth={auth} setAuth={setAuth} />
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
          />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};
export default Routes;

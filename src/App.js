import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);
  const [techs, setTechs] = useState([]);
  const [user, setUser] = useState({});
  return (
    <>
      <ToastContainer />
      <Routes
        auth={auth}
        setAuth={setAuth}
        techs={techs}
        setTechs={setTechs}
        user={user}
        setUser={setUser}
      />
    </>
  );
}

export default App;

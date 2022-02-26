import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

function App() {
  const [techs, setTechs] = useState([]);
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Routes
        techs={techs}
        setTechs={setTechs}
      />
    </>
  );
}

export default App;

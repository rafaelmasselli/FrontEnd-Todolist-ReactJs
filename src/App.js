import "./App.css";
import Home from "./pages/Home/index";
import Cadastro from "./pages/Cadastro/index";
import { Routes, Route } from "react-router-dom";
import Aba from "./components/shared/Loop/index";
import Edit from "./pages/Editagem/index";
import Detalhes from "./pages/View/index";

function App() {
  return (
    <div>
      <Aba />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/Detalhes/:id" element={<Detalhes />} />
      </Routes>
    </div>
  );
}

export default App;

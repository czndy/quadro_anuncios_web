import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Cadastro from "./pages/Cadastro/cadastro";
import CadastroPartes from "./pages/CadastroPartes/cadastroPartes";
import Dashboard from "./pages/Dashboard/dashboard";
import Discursos from "./pages/Discursos/discursos";
import Login from "./pages/Login/login";
import Mecanicas from "./pages/Mecanicas/mecanicas";
import Menu from "./pages/Menu/menu";
import Partes from "./pages/Partes/partes";
import Teste from "./pages/Teste/teste";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard menu={<Menu />} />} />
        <Route path="/mecanicas" element={<Mecanicas />} />
        <Route path="/discursos" element={<Discursos />} />
        <Route path="/cadastro" element={<Cadastro menu={<Menu />} />} />
        <Route path="/partes" element={<Partes />} />
        <Route path="/cadastro-partes" element={<CadastroPartes />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

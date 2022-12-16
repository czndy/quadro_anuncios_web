import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Cadastro from "./pages/Cadastro/cadastro";
import Dashboard from "./pages/Dashboard/dashboard";
import DashText from "./pages/Dashboard/dashText";
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
        <Route
          path="/dashboard"
          element={
            <Dashboard
              menu={<Menu name="Dashboard" content={<DashText />} />}
            />
          }
        />
        <Route
          path="/mecanicas"
          element={<Mecanicas menu={<Menu name="Mecânicas" />} />}
        />
        <Route
          path="/discursos"
          element={<Discursos menu={<Menu name="Discursos" />} />}
        />
        <Route
          path="/cadastro"
          element={<Cadastro menu={<Menu name="Cadastro" />} />}
        />
        <Route
          path="/partes"
          element={<Partes menu={<Menu name="Partes" />} />}
        />

        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
}

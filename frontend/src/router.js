import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import Mecanicas from "./pages/Mecanicas/mecanicas";
import Discursos from "./pages/Discursos/discursos";
import Cadastro from "./pages/Cadastro/cadastro";
import Partes from "./pages/Partes/partes";
import CadastroPartes from "./pages/CadastroPartes/cadastroPartes";


export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/mecanicas" element={<Mecanicas/>}/>
                <Route path="/discursos" element={<Discursos/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/partes" element={<Partes/>}/>
                <Route path="/cadastro-partes" element={<CadastroPartes/>}/>
            </Routes>
        </BrowserRouter>
    );
}
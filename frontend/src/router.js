import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import Mecanicas from "./pages/Mecanicas/mecanicas";

/*
import Discursos from "./pages/Discursos";
import Cadastro from "./pages/Cadastro";
import Partes from "./pages/Partes";
import CadastroPartes from "./pages/CadastroPartes";
*/

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/mecanicas" element={<Mecanicas/>}/>
                
                {
                /*<Route path="/discursos" exact component={Discursos}/>
                <Route path="/cadastro" exact component={Cadastro}/>
                <Route path="/partes" exact component={Partes}/>
                <Route path="/cadastro-partes" exact component={CadastroPartes}/>
                */}
            </Routes>
        </BrowserRouter>
    );
}
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
/*
import Mecanicas from "./pages/Mecanicas";
import Discursos from "./pages/Discursos";
import Cadastro from "./pages/Cadastro";
import Partes from "./pages/Partes";
import CadastroPartes from "./pages/CadastroPartes";
*/

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                {/* é utilizado exact no caminho / pois o atributo path verifica se contém aquela informação na url. Todos endpoints têm / então usamos exact para garantir que a url contenha apenas / */}
               <Route path="/" exact component={Login}/>
               {
               /*<Route path="/mecanicas" exact component={Mecanicas}/>
               <Route path="/discursos" exact component={Discursos}/>
               <Route path="/cadastro" exact component={Cadastro}/>
               <Route path="/partes" exact component={Partes}/>
               <Route path="/cadastro-partes" exact component={CadastroPartes}/>
               */}
            </Switch>
        </BrowserRouter>
    );
}
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Pages from './components/Pages';
import ObrasResidenciais from './components/pages/portifolio/ObrasResidenciais';
import ConstrucaoJazigos from './components/pages/portifolio/ConstrucaoJazigos';
import ObrasManutencao from './components/pages/portifolio/ObrasManutencao';
import ProjetosLegais from './components/pages/portifolio/ProjetosLegais';
import ProjetoVelario from './components/pages/portifolio/ProjetoVelario';
import ProjetosRevit from './components/pages/portifolio/ProjetosRevit';
import Portfólio from './components/pages/Portfólio';



function Routes(){ 
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Pages />
                </Route>
                <Route exact path="/portfolio">
                    <Portfólio />
                </Route>
                <Route exact path="/obras-residenciais">
                    <ObrasResidenciais />
                </Route>
                <Route exact path="/construcao-jazigos">
                    <ConstrucaoJazigos />
                </Route>
                <Route exact path="/manutencao-geral">
                    <ObrasManutencao/>
                </Route>
                <Route exact path="/projetos-legais">
                    <ProjetosLegais/>
                </Route>
                <Route exact path="/projeto-velario">
                    <ProjetoVelario/>
                </Route>
                <Route exact path="/projetos-residenciais">
                    <ProjetosRevit/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
    
};

export default Routes;
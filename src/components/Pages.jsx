import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Ferramentas from "./pages/Ferramentas";
import Início from "./pages/Início";
import NavBar from "./pages/NavBar";
import Portfólio from "./pages/Portfólio";
import SocialLinks from "./pages/SocialLinks";
import React from 'react'


function Pages() {
  return (
    <div>
      <NavBar />
      <Início />
      <Sobre />
      <Portfólio />
      <Ferramentas />
      <Contato />
      <SocialLinks />
    </div>
    
  );
}

export default Pages;

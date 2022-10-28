import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Ferramentas from "./components/Ferramentas";
import Início from "./components/Início";
import NavBar from "./components/NavBar";
import Portfólio from "./components/Portfólio";
import SocialLinks from "./components/SocialLinks";

function App() {
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

export default App;

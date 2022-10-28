import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Experiência from "./components/Experiência";
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
      <Experiência />
      <Contato />
      <SocialLinks />
    </div>
  );
}

export default App;

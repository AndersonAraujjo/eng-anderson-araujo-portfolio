import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Experiência from "./components/Experiência";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import Portfólio from "./components/Portfólio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Inicio />
      <Sobre />
      <Portfólio />
      <Experiência />
      <Contato />
      <SocialLinks />
    </div>
  );
}

export default App;

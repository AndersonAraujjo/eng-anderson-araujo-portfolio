import React from "react";
import alvenariaTerreo from '../assets/portfolio/alvenariaTerreo.jpg';
import fotoCapaJazigos from '../assets/portfolio/fotoCapaJazigos.jpg';
import manutencãoGeral from '../assets/portfolio/manutencãoGeral.jpg';
import projetoJazigos from '../assets/portfolio/projetoJazigos.jpg';
import velario from '../assets/portfolio/velario.jpg';
import projetosResidencias from '../assets/portfolio/projetosResidencias.jpg';


const Portfólio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'Obras Residenciais',
      src: alvenariaTerreo
    },
    {
      id: 2,
      title: 'Construção de Jazigos',
      src: fotoCapaJazigos
    },
    {
      id: 3,
      title: 'Manutenções em Geral',
      src: manutencãoGeral
    },
    {
      id: 4,
      title: 'Projetos Legais',
      src: projetoJazigos
    },
    {
      id: 5,
      title: 'Projeto Velário',
      src: velario
    },
    {
      id: 6,
      title: 'Projetos Residenciais',
      src: projetosResidencias
    },
  ]

  return (
  <div
    name="Portfólio"
    className="bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >

        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfólio
          </p>
          <p className="py-6">
            Acompanhe aqui alguns dos trabalhos no qual participei.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
          px-12 sm:px-0">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img 
                src={src} 
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
  
              <div className="flex items-center justify-center font-bold ">
                <button className="py-3 m-4 duration-200
                hover:scale-105">
                  {title}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
};

export default Portfólio;
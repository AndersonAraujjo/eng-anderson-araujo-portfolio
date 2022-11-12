import React from "react";
import escavacaoBaldrames from '../../../assets/portfolio/obras-residenciais/escavacaoBaldrames.jpeg';
import concretagemBlocosBaldrames from '../../../assets/portfolio/obras-residenciais/concretagemBlocosBaldrames.jpeg';
import alvenariaEmbasamento from '../../../assets/portfolio/obras-residenciais/alvenariaEmbasamento.jpeg';
import impermeabilizacaoEmbasamento from '../../../assets/portfolio/obras-residenciais/impermeabilizacaoEmbasamento.jpeg';
import inicioalvenaria from '../../../assets/portfolio/obras-residenciais/inicioalvenaria.jpeg';
import montagemFormaseVigas from '../../../assets/portfolio/obras-residenciais/montagemFormaseVigas.jpeg';
import escoramentos from '../../../assets/portfolio/obras-residenciais/escoramentos.jpeg';
import concretagemLaje from '../../../assets/portfolio/obras-residenciais/concretagemLaje.jpeg';
import alvenariaTerreo from '../../../assets/portfolio/obras-residenciais/alvenariaTerreo.jpeg';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";




const ObrasResidenciais = () => {
  const residenciais = [
    {
      id: 1,
      title: 'Escavação de fundação ( blocos e baldrames )',
      src: escavacaoBaldrames
    },
    {
      id: 2,
      title: 'Concretagem da fundação ( blocos e baldrames )',
      src: concretagemBlocosBaldrames
    },
    {
      id: 3,
      title: 'Alvenaria de embasamento de Muro de Arrimo e da residência',
      src: alvenariaEmbasamento
    },
    {
      id: 4,
      title: 'Impermeabilização da alvenaria de embasamento',
      src: impermeabilizacaoEmbasamento
    },
    {
      id: 5,
      title: 'Alvenaria do muro de arrimo e da residência',
      src: inicioalvenaria
    },
    {
      id: 6,
      title: 'Montagem de caixarias e colocação da armadura de vigas',
      src: montagemFormaseVigas
    },
    {
      id: 7,
      title: 'Montagem de formas e escoramentos das vigas e lajes',
      src: escoramentos
    },
    {
      id: 8,
      title: 'Concretagem de vigas e lajes da residência',
      src: concretagemLaje
    },
    {
      id: 8,
      title: 'Alvenaria em altura de respaldo com aberturas para esquadrias',
      src: alvenariaTerreo
    },
    
    
    
  ]

  return (
  <div
    name="ObrasResidenciais"
    className="bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="flex justify-between">
          <div className="pb-10">
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">
              Obras Residenciais
            </p>
          </div>
          <div className="text-sm font-bold">
            <a href="/"
                smooth
                duration={500}
                className=" group text-white w-fit px-3 py-2 flex items-center
                rounded-md bg-gradient-to-r
              from-cyan-500 to-blue-500 cursor-pointer hover:scale-105">
                  Voltar
                  <span className="group-hover:scale-x-150 duration-300">
                    <MdOutlineKeyboardArrowLeft size={20}
                    className="ml-1" />
                  </span>
            </a>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
          px-12 sm:px-0">
          {residenciais.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img 
                src={src} 
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
  
              <div className="flex items-center justify-center ">
                <button className="py-3 m-2 duration-200">
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

export default ObrasResidenciais;

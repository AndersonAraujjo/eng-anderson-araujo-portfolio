import React from "react";
import vistaFrontal from '../../../assets/portfolio/velario/vistaFrontal.jpg';
import vistaLateral from '../../../assets/portfolio/velario/vistaLateral.jpg';
import bancadaVelas from '../../../assets/portfolio/velario/bancadaVelas.jpg';
import plantaBaixa from '../../../assets/portfolio/velario/plantaBaixa.jpg';
import vistaLateralObra from '../../../assets/portfolio/velario/vistaLateralObra.jpeg';
import vistaInternaObra from '../../../assets/portfolio/velario/vistaInternaObra.jpeg';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";




const ProjetoVelario = () => {
  const velario = [
    {
      id: 1,
      title: 'Vista frontal do projeto',
      src: vistaFrontal
    },
    {
      id: 2,
      title: 'Vista lateral do projeto',
      src: vistaLateral
    },
    {
      id: 3,
      title: 'Vista interna do projeto',
      src: bancadaVelas
    },
    {
      id: 4,
      title: 'Vista da planta baixa',
      src: plantaBaixa
    },
    {
      id: 5,
      title: 'Vista lateral da Obra',
      src: vistaLateralObra
    },
    {
      id: 6,
      title: 'Vista interna da Obra',
      src: vistaInternaObra
    },
    
  ]

  return (
  <div
    name="ProjetoVelario"
    className="bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="flex justify-between">
          <div className="pb-10">
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">
              Projeto de Reforma do Velário
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
          {velario.map(({ id, src, title }) => (
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

export default ProjetoVelario;

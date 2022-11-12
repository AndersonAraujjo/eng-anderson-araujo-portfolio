import React from "react";
import escavacaoFundacao from '../../../assets/portfolio/construcao-jazigos/escavacaoFundacao.jpeg';
import vigasBaldrames from '../../../assets/portfolio/construcao-jazigos/vigasBaldrames.jpeg';
import construcaoParedes from '../../../assets/portfolio/construcao-jazigos/construcaoParedes.jpeg';
import montagemFormas from '../../../assets/portfolio/construcao-jazigos/montagemFormas.jpg';
import jazigosConstruidos from '../../../assets/portfolio/construcao-jazigos/jazigosConstruidos.jpeg';
import aterroJazigos from '../../../assets/portfolio/construcao-jazigos/aterroJazigos.jpeg';
import aplicacaoGrama from '../../../assets/portfolio/construcao-jazigos/aplicacaoGrama.jpeg';
import construcaoJazigos from '../../../assets/portfolio/construcao-jazigos/construcaoJazigos.jpeg';
import gramaePasseio from '../../../assets/portfolio/construcao-jazigos/gramaePasseio.jpeg';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";



const ConstrucaoJazigos = () => {
  const construcaojazigos = [
    {
      id: 1,
      title: 'Escavação da fundacao de estacas e baldrames',
      src: escavacaoFundacao
    },
    {
      id: 2,
      title: 'Concretagem de estacas e vigas baldrames',
      src: vigasBaldrames
    },
    {
      id: 3,
      title: 'Construção e amarração das paredes',
      src: construcaoParedes
    },
    {
      id: 4,
      title: 'Montagem de caixarias para vigas cinta',
      src: montagemFormas
    },
    {
      id: 5,
      title: 'Paredes dos jazigos já Concluída',
      src: jazigosConstruidos
    },
    {
      id: 6,
      title: 'Aplicação de camada de terra sobre os jazigos',
      src: aterroJazigos
    },
    {
      id: 7,
      title: 'Aplicação da camada de grama sobre os jazigos',
      src: aplicacaoGrama
    },
    {
      id: 8,
      title: 'Aplicação de Grama e montagem do passeio',
      src: gramaePasseio
    },
    {
      id: 9,
      title: 'Vista da obra em andamento',
      src: construcaoJazigos
    },
    
    
    
    
  ]

  return (
  <div
    name="ConstrucaoJazigos"
    className="bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="flex justify-between">
          <div className="pb-8">
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">
              Construção de Jazigos
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
          px-10 sm:px-0">
          {construcaojazigos.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img 
                src={src} 
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
  
              <div className="flex items-center justify-center">
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

export default ConstrucaoJazigos;

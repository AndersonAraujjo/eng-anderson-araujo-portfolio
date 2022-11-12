import React from "react";
import bloqueteVagas from '../../../assets/portfolio/obras-manutencao/bloqueteVagas.jpeg';
import canaletasAguasPluviais from '../../../assets/portfolio/obras-manutencao/canaletasAguasPluviais.jpeg';
import construcaoCalcada from '../../../assets/portfolio/obras-manutencao/construcaoCalcada.jpeg';
import contrucaoIlha from '../../../assets/portfolio/obras-manutencao/contrucaoIlha.jpeg';
import corrimaoEGuardaRei from '../../../assets/portfolio/obras-manutencao/corrimaoEGuardaRei.jpeg';
import instalacaoGradePoco from '../../../assets/portfolio/obras-manutencao/instalacaoGradePoco.jpeg';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";




const ObrasManutencao = () => {
  const manutencao = [
    {
      id: 1,
      title: 'Recuperação de pavimentação das vagas de estacionamento',
      src: bloqueteVagas
    },
    {
      id: 2,
      title: 'Recuperação de canaletas de aguas pluviais',
      src: canaletasAguasPluviais
    },
    {
      id: 3,
      title: 'Construção da calçada e guarda-corpo',
      src: construcaoCalcada
    },
    {
      id: 4,
      title: 'Construção de Ilha para instalação de cancelas',
      src: contrucaoIlha
    },
    {
      id: 5,
      title: 'Construção de corrimão e guarda-corpo',
      src: corrimaoEGuardaRei
    },
    {
      id: 6,
      title: 'Intalação de grade de proteção de poço',
      src: instalacaoGradePoco
    },
   
    
  ]

  return (
  <div
    name="ObrasManutencao"
    className="bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="flex justify-between">
          <div className="pb-10">
            <p className="text-2xl font-bold inline border-b-4 border-gray-500">
              Obras de Manutenção
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
          {manutencao.map(({ id, src, title }) => (
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

export default ObrasManutencao;

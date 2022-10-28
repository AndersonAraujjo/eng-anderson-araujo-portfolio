import React from "react";

const Sobre = () => {
  return (
    <div
    name="Sobre"
    className="w-full md:h-screen bg-gradient-to-b from-gray-800
    to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">

        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 
          border-gray-500">
            Sobre
          </p>
        </div>

        <p className="text-xl text-justify mt-8">
        Minha carreira profissional se inicia em 2018, ano em que concluí minha graduação em Engenharia Civil. Neste ano atuei como estagiário de Engenharia na empresa Empreendimentos Jaraguá onde tive participação na elaboração de projetos de infraestrutura, acompanhamento técnico em obras e atividades administrativas.
        </p>
        <br />
        <p className="text-xl text-justify">
        Após o término do periodo de estágio e conclusão da graduação, me voltei para o mercado de trabalho, onde iniciei como vendedor projetista na Simonetto Moveis Planejados, atuei com  leitura e interpretação de projetos arquitetônicos e desenvolvi projetos de móveis planejados. Após aproximados 6 meses fui convidado a retornar para o Empreendimentos Jaraguá, porém desta vez como Engenheiro Civil prestador de serviços, onde durante um ano e meio fiquei responsável pelo planejamento e execução das obras no empreendimento.
        </p>

        <br />
        <p className="text-xl text-justify">
        Entre fevereiro a julho de 2022 atuei juntamente com a Perassolli Construtora na construção de obras residenciais, fiquei a cargo de planejar e fazer o acompanhamento técnico das obras, para isso atuei com orçamentos, negociações com fornecedores, coordenação mão de obra e com a execução em obra das especificações dos projetos arquitetônicos, estruturais e complementares.
        </p>
      </div>

    </div>
  )
};

export default Sobre
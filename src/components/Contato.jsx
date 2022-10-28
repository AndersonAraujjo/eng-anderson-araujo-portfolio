import React from "react";

const Contato = () => {
  return (
    <div
        name="Contato"
        className="w-full h-screen bg-gradient-to-b from-black
        to-gray-800 p-4 text-white"
    >
        <div className="flex flex-col p-4 justify-center
        max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500"
                >
                    Contato
                </p>
                <p className="py-6"
                >
                    Entre em contato comigo.
                </p>
            </div>

            <div className=" flex justify-center items-center">
                <form 
                    action="https://getform.io/f/99eae0e3-8d19-4b8e-8a05-5d5c4a17c0f4" 
                    method="POST" 
                    className=" flex flex-col w-full md:w-1/2"
                >
                    <input 
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        className="p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Seu Email"
                        className="my-4 p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none"
                    />
                    <textarea 
                        name="message"
                        placeholder="Escreva sua mensagem."
                        rows="10"
                        className="p-2 bg-transparent border-2 rounded-md
                        text-white focus:outline-none"
                    ></textarea>
                    
                    <button className="text-white bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
                    items-center rounded-md hover:scale-110 duration-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contato
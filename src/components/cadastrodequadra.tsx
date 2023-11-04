import React from "react";

const CadastroEspaco: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title text-4xl font-bold relative mb-7">
        Cadastro de Espaços Esportivos e Recreativos
        <div className="absolute left-0 bottom-0 h-1 w-24 bg-indigo-700"></div>
      </h1>
      <form action="#">
        <div className="space-details flex flex-wrap justify-between mb-12">
          <div className="input-box mb-6 w-1/2">
            <span className="details font-semibold block mb-2">Nome</span>
            <input
              type="text"
              placeholder="Nome do Espaço"
              required
              className="w-full h-10 border rounded-md px-3 outline-none text-gray-700 transition-all duration-300 focus:border-indigo-700"
            />
          </div>
          <div className="input-box mb-6 w-1/2">
            <span className="details font-semibold block mb-2">Modalidade</span>
            <input
              type="text"
              placeholder="Modalidade do Espaço"
              required
              className="w-full h-10 border rounded-md px-3 outline-none text-gray-700 transition-all duration-300 focus:border-indigo-700"
            />
          </div>
          <div className="input-box w-1/2">
            <span className="details font-semibold block mb-2">Descrição</span>
            <input
              type="text"
              placeholder="Descrição sobre o Espaço"
              required
              className="w-full h-10 border rounded-md px-3 outline-none text-gray-700 transition-all duration-300 focus:border-indigo-700"
            />
          </div>
        </div>
        <div className="button mb-12">
          <input
            type="submit"
            value="Cadastrar"
            className="w-full h-10 text-white bg-indigo-700 rounded-md font-semibold text-lg cursor-pointer transition-all duration-300 hover:bg-indigo-600"
          />
        </div>
      </form>
    </div>
  );
};

export default CadastroEspaco;

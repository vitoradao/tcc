import Link from "next/link";
import logo from "@/assets/VK_ESPORTES_PRONTA.png";
import { useEffect } from "react";
import Image from "next/image";
import QuadraImage1 from "@/assets/b196_web.jpg";
import QuadraImage2 from "@/assets/b196_web.jpg";
import QuadraImage3 from "@/assets/b196_web.jpg";

export default function Home() {
  return (
    <div className="font-poppins bg-primary-color">
      {/* Cabeçalho */}
      <header className="bg-white w-full fixed top-0 left-0 transition duration-500 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={130} height={40} />
          </Link>
          <nav>
            <ul className="flex space-x-10">
              <li>
                <a href="" className="text-black font-bold text-2xl">
                  HOME
                </a>
              </li>
              <li>
                <Link
                  href="/agendamento/agendamento"
                  className="text-black font-bold text-2xl"
                >
                  AGENDAMENTO
                </Link>
              </li>
              <li>
                 <Link href="/admin/admin" className="text-black font-bold text-2xl">
                  ADMIN
                </Link>
              </li>
              <li>
                <a href="#" className="text-black font-bold text-2xl">
                  SOBRE
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a href="#">
              <button className="w-36 h-12 bg-secondary-color text-black cursor-pointer transition duration-200 font-bold text-2xl rounded-lg">
                CONTATO
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <section className="container mx-auto p-4 text-center">
        <h1 className="text-white font-bold text-4xl uppercase leading-tight">
          Faça agora seu agendamento!
        </h1>
      </section>

      <section className="container mx-auto p-4 text-center">
        <h2 className="text-black font-bold text-3xl mb-4">
          Quadras Disponíveis para Alugar
        </h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="w-1/3 bg-white rounded-lg p-4 mb-4">
            <Image src={QuadraImage1} alt="Quadra 1" />
            <p className="text-black font-bold text-xl mt-2">Quadra de Tênis</p>
          </div>
          <div className="w-1/3 bg-white rounded-lg p-4 mb-4">
            <Image src={QuadraImage2} alt="Quadra 2" />
            <p className="text-black font-bold text-xl mt-2">
              Campo de Futebol
            </p>
          </div>
          <div className="w-1/3 bg-white rounded-lg p-4 mb-4">
            <Image src={QuadraImage3} alt="Quadra 3" />
            <p className="text-black font-bold text-xl mt-2">
              Quadra de Basquete
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

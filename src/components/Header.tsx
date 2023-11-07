import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/VK_ESPORTES_PRONTA.png";

export default function Header() {
  return (
    <header className="bg-white w-full fixed top-0 left-0 transition duration-500 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="logo" width={130} height={40} />
        </Link>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a href="#" className="text-black font-bold text-2xl">
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
              <a href="#" className="text-black font-bold text-2xl">
                NOVIDADES
              </a>
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
  );
}

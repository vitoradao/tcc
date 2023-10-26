import Link from "next/link";
import logo from "@/assets/VK_ESPORTES_PRONTA.png";
import background from "@/assets/bola-nike-vermelha.jpg";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let header = document.querySelector("#header");
      if (header) {
        header.classList.toggle("rolagem", window.scrollY > 0);
      }
    });
  }, []);

  return (
    <div className="font-poppins">
      <header className="bg-opacity-0 w-full fixed top-0 left-0 transition duration-500 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo" width={130} height={40} />
          </Link>
          <nav>
            <ul className="flex space-x-20">
              <li>
                <a href="#" className="text-white font-bold">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-bold">
                  AGENDAMENTO
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-bold">
                  NOVIDADES
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-bold">
                  SOBRE
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <a href="#">
              <button className="w-32 h-10 bg-blue-600 text-white cursor-pointer transition duration-200">
                CONTATO
              </button>
            </a>
          </div>
        </div>
      </header>

      <section className="relative h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className=" text-black font-bold text-6xl">
            FAÇA AGORA{" "}
            <span className="text-white font-bold text-6xl">
              SEU AGENDAMENTO!
            </span>
          </h1>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import image from "@/assets/b196_web.jpg";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Agendamento() {
  const router = useRouter();
  return (
    <div className="bg-primary-color h-screen flex flex-col items-center justify-center">
      <Header />
      <div className="bg-opacity-50 p-8 rounded-lg shadow-lg flex items-center space-x-8">
        <div className="w-1/4">
          <Image
            src={image}
            alt="Imagem da quadra"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="w-3/4 px-8">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-semibold text-white mb-2 mr-4">
              QUADRA EXTERNA DE TENIS • QUADRA DURA • QUANTIDADE MÁXIMA DE
              JOGADORES: 4
            </h1>

            <Link
              href={"confirmaragendamento"}
              className="bg-secondary-color text-black font-bold py-2 px-4 rounded-lg"
            >
              AGENDAR
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-3/4 mt-4 border-t border-white" />{" "}
      <div className="bg-opacity-50 p-8 rounded-lg shadow-lg flex items-center space-x-8">
        <div className="w-1/4">
          <Image
            src={image}
            alt="Imagem da quadra"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="w-3/4 px-8">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-semibold text-white mb-2 mr-4">
              QUADRA EXTERNA DE TENIS • QUADRA DURA • QUANTIDADE MÁXIMA DE
              JOGADORES: 4
            </h1>

            <button className="bg-secondary-color text-black font-bold py-2 px-4 rounded-lg">
              AGENDAR
            </button>
          </div>
        </div>
      </div>
      <hr className="w-3/4 mt-4 border-t border-white" />{" "}
      <div className="bg-opacity-50 p-8 rounded-lg shadow-lg flex items-center space-x-8">
        <div className="w-1/4">
          <Image
            src={image}
            alt="Imagem da quadra"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="w-3/4 px-8">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-semibold text-white mb-2 mr-4">
              QUADRA EXTERNA DE TENIS • QUADRA DURA • QUANTIDADE MÁXIMA DE
              JOGADORES: 4
            </h1>

            <button className="bg-secondary-color text-black font-bold py-2 px-4 rounded-lg">
              AGENDAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

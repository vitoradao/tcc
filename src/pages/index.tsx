import React from "react";
import Image from "next/image";
import { api } from "@/services/axios";
import image from "@/assets/b196_web.jpg";
import logo from "@/assets/VK_ESPORTES_PRONTA.png";

import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Home() {
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.post("/register", data);
      console.log(response.data);
      router.push("/home.page");
      reset();
    } catch (error) {
      console.error(error);
      console.log("Algo deu errado");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full flex">
        <div className="w-1/2 h-screen bg-gray-800 relative">
          <Image
            src={image}
            alt="Imagem de fundo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image src={logo} alt="logo" className="max-w-full max-h-full" />
          </div>
        </div>

        <div className="w-1/2 h-full bg-gray-900 p-8 mt-40">
          <h2 className="text-3xl text-white font-bold mb-8">Cadastre-se</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-300 text-lg mb-2"
              >
                Nome:
              </label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Seu nome"
                    className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
                  />
                )}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-300 text-lg mb-2"
              >
                Email:
              </label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Seu email"
                    className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
                  />
                )}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-300 text-lg mb-2"
              >
                Senha:
              </label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="Sua senha"
                    className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
                  />
                )}
              />
            </div>
            <Link href={"/login"} className="text-blue-600">
              Ja possui cadastro? Faca seu login
            </Link>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-700 text-white px-4 py-3 rounded-full cursor-pointer hover:bg-indigo-800 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

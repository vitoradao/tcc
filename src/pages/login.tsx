import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";
import image from "@/assets/b196_web.jpg";
import logo from "@/assets/VK_ESPORTES_PRONTA.png";
import { api } from "@/services/axios";

interface LoginData {
  username: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const { handleSubmit, register, reset } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);

      if (response.status === 200) {
        router.push("/home.page");
      } else {
        console.log("Erro de autenticação");
      }
    } catch (error) {
      console.error(error);
      console.log("Erro no login");
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
          <h2 className="text-3xl text-white font-bold mb-8">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-gray-300 text-lg mb-2"
              >
                Email ou Nome de Usuário:
              </label>
              <input
                type="text"
                id="username"
                {...register("username")}
                placeholder="Seu email ou nome de usuário"
                className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-300 text-lg mb-2"
              >
                Senha:
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                placeholder="Sua senha"
                className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-700 text-white px-4 py-3 rounded-full cursor-pointer hover:bg-indigo-800 text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

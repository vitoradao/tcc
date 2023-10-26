import React, { useState } from "react";
import Image from "next/image";
import { api } from "@/services/axios"; // Certifique-se de que o módulo api esteja configurado corretamente
import image from "@/assets/b196_web.jpg";
import { useRouter } from "next/router";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
      });
      console.log(response.data);
      router.push("/home.page");
    } catch (error) {
      console.error(error);
      setName("");
      setEmail("");
      setPassword("");
      console.log("Algo deu errado animal");
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full flex">
        <div className="w-1/2 h-screen bg-gray-800">
          <Image
            src={image}
            alt="Imagem de fundo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-1/2 h-full bg-gray-900 p-8 mt-40">
          <h2 className="text-3xl text-white font-bold mb-8">
            Tela de Cadastro
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-300 text-lg mb-2"
              >
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome"
                className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-300 text-lg mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu email"
                className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                placeholder="Sua senha"
                className="w-full p-3 bg-gray-800 border rounded focus:ring-2 focus:ring-blue-400 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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

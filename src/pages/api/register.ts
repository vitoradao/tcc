import { prisma } from "@/services/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(404).json({ error: "Método inválido" });
  }

  try {
    const { name, email, password } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        password,
        email,
      },
    });

    return res.status(200).json({ message: "Cadastro bem-sucedido", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno", error });
  }
}

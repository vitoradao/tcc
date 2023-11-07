import { prisma } from "@/services/prisma";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: username,
      },
    });

    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    return res
      .status(200)
      .json({ message: "Login concluído com sucesso", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno", error });
  }
}

import { prisma } from "@/services/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end;
    return;
  }

  try {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ name: username }, { email: username }],
      },
    });

    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ message: "Credenciais inválidas" });
      return;
    }

    res.status(200).json({ message: "Login concluido com sucesso", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno", error });
  }
}

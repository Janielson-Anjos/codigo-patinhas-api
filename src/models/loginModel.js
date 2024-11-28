import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prismaClient = new PrismaClient();

export const findUserByEmail = async (email) => {
    return await prismaClient.adotantes.findUnique({
        where: { email },
    });
};

export const comparePassword = async (senha, hashedSenha) => {
    return await bcrypt.compare(senha, hashedSenha);
};

import {
    findAllUsuarios,
    findUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
} from "../models/adotantesModel.js";

import bcrypt from "bcryptjs";

export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await findAllUsuarios();
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await findUsuarioById(id);
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    const { nome_completo, email,telefone, endereco, senha, imagem} = req.body;
    try {
        const senhaHash = bcrypt.hashSync(senha, 10);
        const usuario = await createUsuario({ nome_completo, email, telefone, endereco, senha: senhaHash, imagem });
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nome_completo, email,telefone, endereco, senha, imagem} = req.body;
    try {
        const usuario = await updateUsuario(id, { nome_completo, email, telefone, endereco, senha, imagem });
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUsuario(id);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

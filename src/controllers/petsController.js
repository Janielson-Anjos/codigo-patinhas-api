import {
    findAllPets,
    findPetById,
    createPets,
    updatePets,
    deletePets,
} from "../models/petsModel.js";

export const getAllPets = async (req, res) => {
    try {
        const pets = await findAllPets();
        return res.status(200).json(pets);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getPetById = async (req, res) => {
    const { id } = req.params;
    try {
        const pet = await findPetById(id);
        return res.status(200).json(pet);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createPet = async (req, res) => {
    const { nome, especie, idade, data_nascimento, descricao, status, imagens } = req.body;
    const dataNascimentoComHora = new Date(data_nascimento + "T00:00:00.000Z")
    try {
        const pet = await createPets({ nome, especie, idade, data_nascimento: dataNascimentoComHora, descricao, status, imagens });
        return res.status(201).json(pet);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updatePet = async (req, res) => {
    const { id } = req.params;
    const { nome, especie, idade, data_nascimento, descricao, status, imagens} = req.body;
    const dataNascimentoComHora = new Date(data_nascimento + "T00:00:00.000Z")
    try {
        const pet = await updatePets(id, { nome, especie, idade, data_nascimento: dataNascimentoComHora, descricao, status, imagens });
        return res.status(200).json(pet);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deletePet = async (req, res) => {
    const { id } = req.params;
    try {
        await deletePets(id);
        return res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

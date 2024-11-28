import jwt from "jsonwebtoken";
import { findUserByEmail, comparePassword } from "../models/loginModel.js";

export class LoginController {
    async login(req, res) {
        const { email, senha } = req.body;

        try {
        
            const usuario = await findUserByEmail(email);
            if (!usuario) {
                return res.status(404).json({ error: "User not found" });
            }

            const senhaValida = await comparePassword(senha, usuario.senha);
            if (!senhaValida) {
                return res.status(401).json({ error: "Incorrect credentials" });
            }

            
            const payload = { id: usuario.id, nome: usuario.nome_completo, imagem: usuario.imagem };
            const token = jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '2h' });

            return res.status(200).json({ data: payload, token: token });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

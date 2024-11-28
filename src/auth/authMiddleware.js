import jwt from "jsonwebtoken"

export function verifyAuth(request, response, next) {

    const { authorization } = request.headers;

    if (!authorization){
        return response.status(401).json({ message: "Token missing" });
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const { id } = jwt.verify(token, process.env.SECRET_JWT);
        
        if (!id) {
            return response.status(401).json({ message: "Not authorized" });
        }
        next();
    } catch (error) {
        return response.status(500).json({ error: "Token invalid" });
    }

}
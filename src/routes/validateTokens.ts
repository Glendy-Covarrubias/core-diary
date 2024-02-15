import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];
    if (headerToken !== undefined && headerToken.startsWith('Bearer ')) {
        const bearerToken = headerToken.slice(7);
        jwt.verify(bearerToken, process.env.SECRET_KEY || 'Floppy123');
        next();
    } else {
        res.status(401).json({
            status: 401,
            message: `Access denied`,
            data: req.body
        });
    }
}

export default validateToken;